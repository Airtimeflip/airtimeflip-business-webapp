import { Route } from 'react-router';
import { ROUTE_PATH } from '../../../utils';

// Pages
import { DefaultServicesPage } from '../pages';

// Components

const ServicesRoutes = (
	<Route path={ROUTE_PATH.services.index}>
		<Route index element={<DefaultServicesPage />} />
	</Route>
);

export default ServicesRoutes;
