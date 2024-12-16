import { Route } from 'react-router';
import { ROUTE_PATH } from '../../../utils';

// Pages
import {
	ProfilePage,
	DevelopersPage,
	SecurityPage,
	BankInformationPage,
} from '../pages';
import { SettingsLayout } from '../components';

// Components

const SettingsRoutes = (
	<Route path={ROUTE_PATH.settings.index} element={<SettingsLayout />}>
		<Route path={ROUTE_PATH.settings.profile} element={<ProfilePage />} />
		<Route path={ROUTE_PATH.settings.developers} element={<DevelopersPage />} />
		<Route path={ROUTE_PATH.settings.security} element={<SecurityPage />} />
		<Route
			path={ROUTE_PATH.settings.BankInformation}
			element={<BankInformationPage />}
		/>
	</Route>
);

export default SettingsRoutes;
