import PreviousPageButton from "@/components/PreviousPageButton";
import TerminalContainer from "@/components/TerminalContainer";
import TransactionProgressBar from "@/components/TransactionProgressBar";
import { Planet } from "@/constants/planet";
import { useGetTipQuery } from "@/graphql-headless/generated/graphql";
import { useGetActionPointQuery } from "@/graphql-mimir/generated/graphql";
import { useSignAndStage } from "@/hooks/useSignAndStage";
import { useAuthStore } from "@/store/auth";
import { Address } from "@planetarium/account";
import { DailyReward } from "@planetarium/lib9c";

const REFILL_INTERVAL = 2550 as const;

const ActionPointPage: React.FC = () => {
	const { avatarAddress, currentAccount, planet } = useAuthStore();

	const {
		data: apData,
		loading: apLoading,
		error: apError,
	} = useGetActionPointQuery({
		variables: { avatarAddress: avatarAddress },
		context: { clientName: "mimir" },
		skip: !avatarAddress,
		pollInterval: 10 * 1000,
	});
	const {
		data: tipData,
		loading: tipLoading,
		error: tipError,
	} = useGetTipQuery({
		context: { clientName: "headless" },
		skip: !avatarAddress,
		pollInterval: 10 * 1000,
	});
	const {
		progress: txProgress,
		txId,
		startSigning,
		error: txError,
	} = useSignAndStage(currentAccount);

	const handleRefillClick = () => {
		if (!avatarAddress) {
			return;
		}

		const action = new DailyReward({
			avatarAddress: Address.fromHex(avatarAddress),
		});
		startSigning(action);
	};

	const calcCanRefill = () => {
		return (
			(tipData?.nodeStatus.tip.index || -1) -
				(apData?.dailyRewardReceivedBlockIndex || -1) >
			REFILL_INTERVAL
		);
	};

	const calcLeftRefillBlock = () => {
		return (
			REFILL_INTERVAL -
			((tipData?.nodeStatus.tip.index || -1) -
				(apData?.dailyRewardReceivedBlockIndex || -1))
		);
	};

	if (apLoading || tipLoading) return <div>Loading...</div>;
	if (apError || tipError) return <div>Error</div>;

	return (
		<>
			<TerminalContainer title="ActionPoint" type="highlight" className="flex">
				<div className="w-full flex">
					<div className="flex flex-col">
						<p className="mb-2 text-center">{apData?.actionPoint} / 120</p>
						<button
							type="button"
							className="btn"
							onClick={handleRefillClick}
							disabled={!calcCanRefill()}
						>
							{calcCanRefill()
								? "Charge AP"
								: `wait 
					${calcLeftRefillBlock()}
					 block`}
						</button>
					</div>
					<TransactionProgressBar
						className="ml-4 content-center"
						progress={txProgress}
						error={txError}
						txId={txId}
						planet={planet || Planet.ODIN}
					/>
				</div>
			</TerminalContainer>

			<PreviousPageButton className="mt-3" />
		</>
	);
};

export default ActionPointPage;
