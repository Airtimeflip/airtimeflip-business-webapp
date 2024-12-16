import { Outlet } from 'react-router';
import SettingsSidebar from './sidebar';
import { useAppSelector } from '../../../store/hooks';

const SettingsLayout = () => {
	const isToggleMenu = useAppSelector((store) => store.appState.isToggleMenu);

	return (
		<div
			className={`fixed w-full top-[65px] overflow-hidden ${
				isToggleMenu ? 'max-w-[calc(100%-295px)]' : 'max-w-[calc(100%-95px)]'
			}`}
		>
			<div className='flex gap-4 md:gap-8'>
				<div className='mt-8'>
					<h1 className='font-semibold text-2xl text-primary mb-4'>Settings</h1>
					<SettingsSidebar />
				</div>
				<div
					className={`flex-1 relative overflow-y-auto h-[calc(100vh-65px)] no-scrollbar pb-8 pt-20`}
				>
					<div className='max-w-[760px]'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsLayout;
