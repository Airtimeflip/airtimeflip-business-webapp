import { EyeIcon, EyeClosedIcon } from 'lucide-react';
import { formatNumberToCurrency, hideContent } from '../../../lib';
import { useState } from 'react';

interface IListItem {
	label: string;
	iconSrc?: string;
}

const ListItem = ({ iconSrc = '/images/down-arrow.svg', label }: IListItem) => {
	return (
		<button className='flex gap-2 items-center'>
			{/* <Icon /> */}
			<div className='max-w-6'>
				<img className='w-full' src={iconSrc} alt='app-logo' />
			</div>
			<span>{label}</span>
		</button>
	);
};

const Vertical = () => {
	return <div className='h-4 w-[1.5px] bg-white'></div>;
};

const WalletBalance = () => {
	const [isToggleBalance, setToggleBalance] = useState<boolean>(false);

	const amount = 20000000;

	const balance = isToggleBalance ? hideContent(amount) : amount;

	return (
		<div className='bg-main-primary text-white drop-shadow border-[0.5px] border-primary/35 px-6 py-8 md:py-12 rounded-md flex flex-col items-center justify-between'>
			<p className='text-center text-sm mb-2'>Wallet balance</p>
			<div className='flex gap-4 items-center'>
				<h2 className='text-2xl font-bold'>
					{formatNumberToCurrency(balance)}
				</h2>
				<button onClick={() => setToggleBalance(!isToggleBalance)}>
					{isToggleBalance ? <EyeClosedIcon /> : <EyeIcon />}
				</button>
			</div>
			<div className='flex gap-6 md:gap-10 mt-6 items-center'>
				<ListItem label='Top wallet' /> <Vertical />
				<ListItem label='Withdraw funds' />
				<Vertical />
				<ListItem label='Transfer funds' />
			</div>
		</div>
	);
};

export default WalletBalance;
