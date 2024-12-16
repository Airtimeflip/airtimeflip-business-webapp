import { Routes, Route, Navigate } from 'react-router';
import { ROUTE_PATH } from '../utils';
import { NotFound, PrivatePageLayout } from '../components';
import {
	TransactionsRoutes,
	DashboardPage,
	AuthenticationRoutes,
	SettingsRoutes,
	ServicesRoutes,
} from '../features';

const RootRouter = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Navigate to={ROUTE_PATH.dashboard} replace />}
			/>
			<Route
				path='/settings'
				element={<Navigate to={ROUTE_PATH.settings.profile} replace />}
			/>
			<Route element={<PrivatePageLayout />}>
				<Route path={ROUTE_PATH.dashboard} element={<DashboardPage />} />
				{TransactionsRoutes}
				{SettingsRoutes}
				{ServicesRoutes}
				{/* Catch-All Route */}
				<Route path='*' element={<NotFound />} />
			</Route>
			{AuthenticationRoutes}
		</Routes>
	);
};

export default RootRouter;
