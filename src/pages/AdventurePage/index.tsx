import PreviousPageButton from "@/components/PreviousPageButton";
import RadioButton from "@/components/RadioButton";
import RadioGroup from "@/components/RadioGroup";
import TerminalContainer from "@/components/TerminalContainer";
import TransactionProgressBar from "@/components/TransactionProgressBar";
import { Planet } from "@/constants/planet";
import {
	useGetWorldInformationQuery,
	useGetItemSlotQuery,
	useGetRuneSlotQuery,
	BattleType,
} from "@/graphql-mimir/generated/graphql";
import { useSignAndStage } from "@/hooks/useSignAndStage";
import { useAuthStore } from "@/store/auth";
import { uuidToUint8Array } from "@/utils/format";
import { Address } from "@planetarium/account";
import { HackAndSlash, RuneSlotInfo } from "@planetarium/lib9c";
import { useState, useEffect, useMemo } from "react";

type Stage = {
	id: number;
	worldId: number;
	isCleared: boolean;
};

const AdventurePage: React.FC = () => {
	const [selectedWorld, setSelectedWorld] = useState<number | null>(null);
	const { avatarAddress, currentAccount, planet } = useAuthStore();

	const {
		data: worldInfoData,
		loading: worldInfoLoading,
		error: worldInfoError,
	} = useGetWorldInformationQuery({
		variables: { avatarAddress: avatarAddress },
		context: { clientName: "mimir" },
		skip: !avatarAddress,
	});
	const {
		data: itemSlotData,
		loading: itemSlotLoading,
		error: itemSlotError,
	} = useGetItemSlotQuery({
		variables: {
			avatarAddress: avatarAddress,
			battleType: BattleType.Adventure,
		},
		context: { clientName: "mimir" },
		skip: !avatarAddress,
	});
	const {
		data: runeSlotData,
		loading: runeSlotLoading,
		error: runeSlotError,
	} = useGetRuneSlotQuery({
		variables: {
			avatarAddress: avatarAddress,
			battleType: BattleType.Adventure,
		},
		context: { clientName: "mimir" },
		skip: !avatarAddress,
	});
	const {
		progress: txProgress,
		txId,
		startSigning,
		error: txError,
	} = useSignAndStage(currentAccount);

	const worldStages = useMemo(() => {
		return (
			worldInfoData?.worldInformation.worldDictionary
				.filter((d) => d.key !== 10001)
				.sort((a, b) => b.key - a.key) || []
		);
	}, [worldInfoData]);

	useEffect(() => {
		if (!selectedWorld) {
			const firstUnclearedWorld = worldStages.find((stage) => {
				const { stageClearedId, stageEnd } = stage.value;
				return (stageClearedId || 0) < stageEnd;
			});
			if (firstUnclearedWorld) setSelectedWorld(firstUnclearedWorld.key);
		}
	}, [worldStages, selectedWorld]);

	const selectedWorldInfoData = useMemo(() => {
		return worldStages.find((stage) => stage.key === selectedWorld) || null;
	}, [worldStages, selectedWorld]);

	const stageList: Stage[] = useMemo(() => {
		if (!selectedWorldInfoData) return [];

		const { stageBegin, stageEnd, stageClearedId } =
			selectedWorldInfoData.value;

		return Array.from({ length: stageEnd - stageBegin + 1 }).map((_, index) => {
			const stageId = stageBegin + index;
			const isCleared = stageId <= (stageClearedId || 0);

			return {
				id: stageId,
				worldId: selectedWorldInfoData.key,
				isCleared,
			};
		});
	}, [selectedWorldInfoData]);

	const handleStageClick = (stage: Stage) => {
		if (itemSlotLoading || itemSlotError || runeSlotLoading || runeSlotError) {
			console.log("error");
			return;
		}
		if (!avatarAddress) {
			return;
		}

		const runeInfos = runeSlotData?.runeSlot?.slots
			.filter((slot) => slot.runeId !== null)
			.map(
				(slot) => new RuneSlotInfo(BigInt(slot.index), BigInt(slot.runeId!)),
			);
		const costumes = itemSlotData?.itemSlot?.costumes.map((v) =>
			uuidToUint8Array(v),
		);
		const equipments = itemSlotData?.itemSlot?.equipments.map((v) =>
			uuidToUint8Array(v),
		);

		const action = new HackAndSlash({
			avatarAddress: Address.fromHex(avatarAddress),
			worldId: BigInt(stage.worldId),
			stageId: BigInt(stage.id),
			costumes: costumes || [],
			equipments: equipments || [],
			foods: [],
			totalPlayCount: BigInt(1),
			apStoneCount: BigInt(0),
			runeInfos: runeInfos || [],
			stageBuffId: null,
		});
		startSigning(action);
	};

	if (worldInfoLoading) return <div>worldInfoLoading...</div>;
	if (worldInfoError)
		return <div>worldInfoError worldInfoLoading world information</div>;

	return (
		<>
			<TerminalContainer title="Adventure" type="highlight" className="flex">
				<RadioGroup title="Select World" className="mr-2">
					{worldStages.map((stage) => (
						<RadioButton
							label={`${stage.value.name} (${stage.key} World)`}
							onChange={() => setSelectedWorld(stage.key)}
							key={stage.key}
							value={stage.key}
							checked={selectedWorld === stage.key}
						/>
					))}
				</RadioGroup>

				{selectedWorld && (
					<RadioGroup
						className="flex justify-around flex-col"
						title="Select Stage"
					>
						<div className="grid grid-cols-7 gap-4">
							{stageList.map((stage) => (
								<button
									key={stage.id}
									onClick={() => handleStageClick(stage)}
									className={`btn ${
										stage.isCleared ? "text-bright-black" : ""
									}`}
								>
									{stage.id}
								</button>
							))}
						</div>

						<TransactionProgressBar
							progress={txProgress}
							error={txError}
							txId={txId}
							planet={planet || Planet.ODIN}
						/>
					</RadioGroup>
				)}
			</TerminalContainer>

			<PreviousPageButton className="mt-3" />
		</>
	);
};

export default AdventurePage;
