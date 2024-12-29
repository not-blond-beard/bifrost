import ROUTES from "@/constants/routes";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
	const location = useLocation();
	const authLoading = false;
	const isAuthorized = false;

	if (authLoading) {
		return (
			<div>
				<p>Retrieving authentication information.</p>
				<p>Please wait a moment.</p>
			</div>
		);
	}

	if (!isAuthorized) {
		return <Navigate to={ROUTES.ACCOUNT} state={{ from: location }} replace />;
	}

	return (
		<>
			<Outlet />
		</>
	);
}
