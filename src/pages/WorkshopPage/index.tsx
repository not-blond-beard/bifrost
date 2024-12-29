import PreviousPageButton from "@/components/PreviousPageButton";
import TerminalContainer from "@/components/TerminalContainer";
import { useGetTipQuery } from "@/graphql-headless/generated/graphql";
import {
	type CombinationSlotState,
	type ItemUsableInterface,
	useGetCombinationSlotsQuery,
} from "@/graphql-mimir/generated/graphql";
import { useAuthStore } from "@/store/auth";
import itemNames from "@/assets/item_name.json";
import skillNames from "@/assets/skill_name.json";

const getItemName = (id: number): string => {
	const itemId = `ITEM_NAME_${id}`;
	return itemNames[itemId]?.English || "Unknown Item";
};

const getSkillName = (id: number): string => {
	const skillId = `SKILL_NAME_${id}`;
	return skillNames[skillId]?.English || "Unknown Item";
};

const WorkshopPage: React.FC = () => {
	const { avatarAddress } = useAuthStore();

	const {
		data: slotData,
		loading: slotLoading,
		error: slotError,
	} = useGetCombinationSlotsQuery({
		variables: { avatarAddress: avatarAddress },
		context: { clientName: "mimir" },
		skip: !avatarAddress,
		pollInterval: 30 * 1000,
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

	if (slotLoading || tipLoading) return <div>Loading...</div>;
	if (slotError || tipError) return <div>Error</div>;

	const renderItem = (item: ItemUsableInterface) => {
		return (
			<div>
				<p>
					[{item.itemSubType}] {getItemName(item.id)} {item.elementalType}(
					{item.grade})
				</p>
				{item.statsMap.value.map((stat) => (
					<p key={stat.key}>
						[Stat] {stat.value.statType} {stat.value.baseValue} +{" "}
						{stat.value.additionalValue}
					</p>
				))}
				{item.skills.map((skill) => (
					<p key={skill.skillRow.id}>
						[Skill] {getSkillName(skill.skillRow.id)} {skill.power}{" "}
						{skill.chance}%
					</p>
				))}
			</div>
		);
	};

	const renderSlot = (slot: CombinationSlotState) => {
		const remainingBlock =
			slot.unlockBlockIndex - (tipData?.nodeStatus.tip.index || -1);
		const isUnlocked = remainingBlock < 0;

		return (
			<div>
				<p>
					Slot {slot.index}
					{!isUnlocked && ` - remain block ${remainingBlock}`}
				</p>
				{slot.result && !isUnlocked ? (
					<div key={slot.index}>
						{slot.result.itemUsable ? renderItem(slot.result.itemUsable) : null}
					</div>
				) : (
					<p>Empty</p>
				)}
			</div>
		);
	};

	return (
		<>
			<TerminalContainer title="Workshop" type="highlight" className="flex">
				<div className="w-full flex">
					<div className="grid grid-cols-1 gap-4">
						{slotData?.combinationSlots.map((slot) => renderSlot(slot.value))}
					</div>
				</div>
			</TerminalContainer>

			<PreviousPageButton className="mt-3" />
		</>
	);
};

export default WorkshopPage;
