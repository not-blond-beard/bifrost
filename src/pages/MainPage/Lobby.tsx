import TerminalContainer from "@/components/TerminalContainer";
import ROUTES from "@/constants/routes";
import { useAuthStore } from "@/store/auth";
import { formatAddress } from "@/utils/format";
import { NavLink } from "react-router-dom";

interface Navigation {
	name: string;
	path: ROUTES;
}

const NavigationList: Array<Navigation> = [
	// { name: "Market", path: ROUTES.MARKET },
	{ name: "Assets", path: ROUTES.ASSETS },
	{ name: "ActionPoint", path: ROUTES.ACTION_POINT },
	{ name: "Adventure", path: ROUTES.ADVENTURE },
	{ name: "Workshop", path: ROUTES.WORKSHOP },
	{ name: "Rune", path: ROUTES.RUNE },
	// { name: "World boss", path: ROUTES.WORLD_BOSS },
	// { name: "Arena", path: ROUTES.ARENA },
	// { name: "Monster collection", path: ROUTES.MONSTER_COLLECTION },
	// { name: "Patrol reward", path: ROUTES.PATROL_REWARD },
	// { name: "Collection", path: ROUTES.COLLECTION },
];

const MenuList: Array<Navigation> = [
	{
		name: "Ranking",
		path: ROUTES.RANKING,
	},
	{
		name: "Inventory",
		path: ROUTES.INVENTORY,
	},
	{
		name: "Production status",
		path: ROUTES.PRODUCTION_STATUS,
	},
	{
		name: "Mail",
		path: ROUTES.MAIL,
	},
	{
		name: "Settings",
		path: ROUTES.SETTINGS,
	},
];

export default function Lobby() {
	const { avatarAddress, avatarInfo } = useAuthStore();

	return (
		<>
			{avatarInfo && avatarAddress && (
				<TerminalContainer title="Avatar info" type="sub" className="">
					<div className="flex items-center gap-3">
						<p>Name</p>
						<p>{avatarInfo.name}</p>
					</div>
					<div className="flex items-center gap-3">
						<p>Address</p>
						<p>{formatAddress(avatarAddress)}</p>
					</div>
					<div className="flex items-center gap-3">
						<p>Level</p>
						<p>{avatarInfo.level}</p>
					</div>
				</TerminalContainer>
			)}

			{/* <TerminalContainer
        title="Menu"
        type="sub"
        className="flex gap-3 flex-wrap"
      >
        {MenuList.map(({ name, path }) => {
          return (
            <NavLink to={path} key={name}>
              <button className="btn">{name}</button>
            </NavLink>
          );
        })}
      </TerminalContainer> */}

			<TerminalContainer
				title="Main service"
				type="sub"
				className="flex gap-3 flex-wrap"
			>
				{NavigationList.map(({ name, path }) => {
					return (
						<NavLink to={path} key={path}>
							<button className="btn">{name}</button>
						</NavLink>
					);
				})}
			</TerminalContainer>
		</>
	);
}
