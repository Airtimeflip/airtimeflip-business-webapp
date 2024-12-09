import { Outlet } from 'react-router';
import AppHeader from './header';
import { useAppSelector } from '../../store/hooks';
import Sidebar from './sidebar';

const PrivatePageLayout = () => {
	const isToggleMenu = useAppSelector((store) => store.appState.isToggleMenu);
	return (
		<div className='relative'>
			<aside
				className={`fixed top-0 bottom-0 left-0 ${
					isToggleMenu ? 'w-[280px]' : 'w-[80px]'
				} border-r border-r-primary hidden md:block transition-all`}
			>
				<Sidebar />
			</aside>
			<div
				className={`fixed bottom-0 top-0 right-0 ${
					isToggleMenu ? ' w-[calc(100%-280px)]' : ' w-[calc(100%-80px)]'
				} h-full transition-all`}
			>
				<AppHeader />
				<main className='py-6 px-4 overflow-auto'>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default PrivatePageLayout;
