import { Route } from 'react-router';
import { ROUTE_PATH } from '../../../utils';

// Pages
import { TransactionsPage } from '../pages';

// Components

const TransactionsRoutes = (
	<Route path={ROUTE_PATH.transactions.index}>
		<Route index element={<TransactionsPage />} />
	</Route>
);

export default TransactionsRoutes;
