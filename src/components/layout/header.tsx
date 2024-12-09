import React from 'react';
import { MenuIcon } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleMenu } from '../../store/reducers';

const UserDetailsWithAvatar = () => {
	return (
		<div className='flex items-center gap-4'>
			<div>
				<h3 className='text-white'>USer name</h3>
				<p className='text-white text-sm'>role</p>
			</div>
			<div className='h-10 w-10 rounded-full bg-gray-400'></div>
		</div>
	);
};

const AppHeader = () => {
	const dispatch = useAppDispatch();
	const isToggleMenu = useAppSelector((store) => store.appState.isToggleMenu);
	const handleToggleMenu = () => dispatch(toggleMenu(!isToggleMenu));

	return (
		<header className='h-[60px] bg-primary p-4 flex items-center justify-between'>
			<button onClick={handleToggleMenu} className='cursor-pointer'>
				<MenuIcon className='text-white' />
			</button>
			<div className='flex gap-4 items-center'>
				<p>Timer</p>
				<UserDetailsWithAvatar />
			</div>
		</header>
	);
};

export default AppHeader;
