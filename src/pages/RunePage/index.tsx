import PreviousPageButton from "@/components/PreviousPageButton";
import TerminalContainer from "@/components/TerminalContainer";
import { useGetRunesQuery } from "@/graphql-mimir/generated/graphql";
import { useAuthStore } from "@/store/auth";
import runeNames from "@/assets/rune_name.json";

const getRuneName = (id: number): string => {
	const runeId = `RUNE_NAME_${id}`;
	return runeNames[runeId]?.English || "Unknown Rune";
};

const RunePage: React.FC = () => {
	const { avatarAddress } = useAuthStore();

	const {
		data: runeData,
		loading: runeLoading,
		error: runeError,
	} = useGetRunesQuery({
		variables: { avatarAddress: avatarAddress },
		context: { clientName: "mimir" },
		skip: !avatarAddress,
		pollInterval: 10 * 1000,
	});

	if (runeLoading) return <div>Loading...</div>;
	if (runeError) return <div>Error</div>;

	return (
		<>
			<TerminalContainer title="Rune" type="highlight" className="flex">
				<div className="w-full flex flex-col">
					<div className="grid grid-cols-2 gap-4">
						{runeData?.runes.map((rune) => (
							<p key={rune.runeId}>
								{getRuneName(rune.runeId)} ({rune.level} lv)
							</p>
						))}
					</div>
				</div>
			</TerminalContainer>

			<PreviousPageButton className="mt-3" />
		</>
	);
};

export default RunePage;
