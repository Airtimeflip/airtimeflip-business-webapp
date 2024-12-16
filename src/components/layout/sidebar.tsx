import { AppLogoWithText, AppLogo } from '../logo';
import { useAppSelector } from '../../store/hooks';
import { ROUTE_PATH } from '../../utils';
import { NavLink } from 'react-router';
import {
	DashboardIcon,
	TransactionIcon,
	LogoutIcon,
	LightingBoltIcon,
	SettingsIcon,
} from '../icons';

const LISTS = [
	{
		name: 'Dashboard',
		path: ROUTE_PATH.dashboard,
		icon: DashboardIcon,
	},
	{
		name: 'Services',
		path: ROUTE_PATH.services.index,
		icon: LightingBoltIcon,
	},
	{
		name: 'Transactions',
		path: ROUTE_PATH.transactions.index,
		icon: TransactionIcon,
	},
	{
		name: 'Settings',
		path: ROUTE_PATH.settings.index,
		icon: SettingsIcon,
	},
];

const Sidebar = () => {
	const isToggleMenu = useAppSelector((store) => store.appState.isToggleMenu);
	return (
		<div className='flex h-full flex-col items-center px-4 py-6'>
			{isToggleMenu ? (
				<AppLogoWithText
					className={`max-w-[160px] transition-all ${
						isToggleMenu ? 'scale-x-100' : 'scale-x-0'
					}`}
				/>
			) : (
				<AppLogo className='max-w-[50px]' />
			)}
			<nav className='flex flex-1 flex-col gap-10 mt-16'>
				<div className='flex flex-1 flex-col gap-12'>
					{LISTS.map((list, i) => (
						<NavLink key={i} to={list.path}>
							{({ isActive }) => (
								<div
									className={`${
										isActive ? 'text-primary' : 'text-gray-700'
									} flex items-center`}
								>
									<div className={isToggleMenu ? 'w-10' : ''}>
										<list.icon color={isActive ? '#026dee' : '#141110'} />
									</div>
									{isToggleMenu && (
										<span
											className={`max-w-[160px] transition-all ${
												isToggleMenu ? 'scale-x-100' : 'scale-x-0'
											}`}
										>
											{list.name}
										</span>
									)}
								</div>
							)}
						</NavLink>
					))}
				</div>

				<button className='flex items-center mb-10'>
					<div className={isToggleMenu ? 'w-10' : ''}>
						<LogoutIcon color='red' />
					</div>
					{isToggleMenu && (
						<span
							className={`max-w-[160px] transition-all ${
								isToggleMenu ? 'scale-x-100' : 'scale-x-0'
							}`}
						>
							Logout
						</span>
					)}
				</button>
			</nav>
		</div>
	);
};

export default Sidebar;
