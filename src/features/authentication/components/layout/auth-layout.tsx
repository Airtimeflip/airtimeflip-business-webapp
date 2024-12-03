import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router';
import { AppLogoWithText } from '../../../../components';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='container m-auto h-screen flex items-center justify-center'>
			<div className='border rounded-[8px] border-primary-light p-4 md:py-12  sm:px-8 md:px-16 max-w-[720px] w-full shadow-md'>
				<div className='max-w-[450px] w-full mx-auto'>
					<AppLogoWithText className='max-w-[220px] mx-auto mb-16' />
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
