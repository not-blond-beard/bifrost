import PreviousPageButton from "@/components/PreviousPageButton";
import TerminalContainer from "@/components/TerminalContainer";
import {
	useGetNcgQuery,
	useGetCrystalQuery,
} from "@/graphql-mimir/generated/graphql";
import { useAuthStore } from "@/store/auth";
import { formatWithCommas, formatWithSuffix } from "@/utils/format";

const AssetsPage: React.FC = () => {
	const { currentAccount } = useAuthStore();

	const {
		data: ncgData,
		loading: ncgLoading,
		error: ncgError,
	} = useGetNcgQuery({
		variables: { address: currentAccount },
		context: { clientName: "mimir" },
		skip: !currentAccount,
	});
	const {
		data: crystalData,
		loading: crystalLoading,
		error: crystalError,
	} = useGetCrystalQuery({
		variables: { address: currentAccount },
		context: { clientName: "mimir" },
		skip: !currentAccount,
	});

	if (ncgLoading || crystalLoading) return <div>Loading...</div>;
	if (ncgError || crystalError) return <div>Error</div>;

	const ncgBalance = Number.parseFloat(ncgData?.balance ?? "0");
	const crystalBalance = Number.parseFloat(crystalData?.balance ?? "0");

	const formattedNcg = formatWithCommas(ncgBalance);
	const formattedCrystal = formatWithCommas(crystalBalance);
	const crystalSuffix = formatWithSuffix(crystalBalance);

	return (
		<>
			<TerminalContainer title="Assets" type="highlight" className="flex">
				<div className="w-full">
					<p>Ncg: {formattedNcg}</p>
					<p>
						Crystal: {formattedCrystal} ({crystalSuffix})
					</p>
				</div>
			</TerminalContainer>

			<PreviousPageButton className="mt-3" />
		</>
	);
};

export default AssetsPage;
