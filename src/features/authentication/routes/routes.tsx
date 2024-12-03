import { Route } from 'react-router';
import { ROUTE_PATH } from '../../../utils';

// Pages
import { LoginPage, ForgetPasswordPage, CreatePasswordPage } from '../pages';

// Components
import { AuthLayout } from '../components';

const AuthenticationRoutes = (
	<Route path={ROUTE_PATH.auth.index} element={<AuthLayout />}>
		<Route path={ROUTE_PATH.auth.login} element={<LoginPage />} />
		<Route
			path={ROUTE_PATH.auth.forgetPassword}
			element={<ForgetPasswordPage />}
		/>
		<Route
			path={ROUTE_PATH.auth.createPassword}
			element={<CreatePasswordPage />}
		/>
	</Route>
);

export default AuthenticationRoutes;
