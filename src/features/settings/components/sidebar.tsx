import { NavLink } from 'react-router';
import { ROUTE_PATH } from '../../../utils';

const LISTS = [
	{ name: 'Profile', path: ROUTE_PATH.settings.profile },
	{ name: 'Security', path: ROUTE_PATH.settings.security },
	{ name: 'Bank Information', path: ROUTE_PATH.settings.BankInformation },
	{ name: 'Developers', path: ROUTE_PATH.settings.developers },
];

const SettingsSidebar = () => {
	return (
		<nav className='p-4 border rounded-md w-[240px]  border-gray/10 flex-1 py-4 bg-white shadow-lg'>
			<ul className='grid gap-2'>
				{LISTS.map((item, i) => (
					<NavLink to={item.path} key={`${item.name}-${i}`}>
						{({ isActive }) => {
							return (
								<span
									className={`relative flex items-center p-3 pl-4 ${
										isActive && 'bg-primary/15'
									}`}
								>
									{isActive && (
										<div className='h-[100%] bg-primary w-[5px] absolute left-0'></div>
									)}
									<span>{item.name}</span>
								</span>
							);
						}}
					</NavLink>
				))}
			</ul>
		</nav>
	);
};

export default SettingsSidebar;
