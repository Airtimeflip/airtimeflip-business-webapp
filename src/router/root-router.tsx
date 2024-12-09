import { Routes, Route, Navigate } from 'react-router';
import { AuthenticationRoutes } from '../features';
import { DashboardPage } from '../features/dashboard';
import { ROUTE_PATH } from '../utils';
import { NotFound, PrivatePageLayout } from '../components';
import { TransactionsRoutes } from '../features/transactions';

const RootRouter = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Navigate to={ROUTE_PATH.dashboard} replace />}
			/>
			<Route element={<PrivatePageLayout />}>
				<Route path={ROUTE_PATH.dashboard} element={<DashboardPage />} />
				{TransactionsRoutes}
				{/* Catch-All Route */}
				<Route path='*' element={<NotFound />} />
			</Route>
			{AuthenticationRoutes}
		</Routes>
	);
};

export default RootRouter;
