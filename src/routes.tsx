import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from "react-router-dom";

import Root from "./App";

import RequireAuth from "@/components/RequireAuth";
import ROUTES from "@/constants/routes";

import {
	AccountPage,
	AdventurePage,
	ActionPointPage,
	WorkshopPage,
	ErrorPage,
	RunePage,
	NotFoundPage,
	MainPage,
	AssetsPage,
} from "@/pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={"/"} element={<Root />} errorElement={<ErrorPage />}>
			<Route index path={ROUTES.MAIN} element={<MainPage />} />
			<Route path={ROUTES.ACCOUNT} element={<AccountPage />} />

			<Route path={ROUTES.AUTH} element={<RequireAuth />}>
				<Route index path={ROUTES.ADVENTURE} element={<AdventurePage />} />
				<Route index path={ROUTES.ACTION_POINT} element={<ActionPointPage />} />
				<Route index path={ROUTES.WORKSHOP} element={<WorkshopPage />} />
				<Route index path={ROUTES.ASSETS} element={<AssetsPage />} />
				<Route index path={ROUTES.RUNE} element={<RunePage />} />
			</Route>

			<Route path="*" element={<NotFoundPage />} />
		</Route>,
	),
);

export default router;
