import React from 'react';
import { WalletIcon } from 'lucide-react';

interface IListItem {
	label: string;
	value: string;
}

const ListItem = ({ label, value }: IListItem) => {
	return (
		<div className='flex items-center justify-between gap-4'>
			<p>{label}</p>
			<p>{value}</p>
		</div>
	);
};

const WalletOverview = () => {
	return (
		<div className='bg-gray-800/90 text-white px-4 md:px-6 py-6 rounded-md'>
			<div className='flex gap-4 items-center justify-between mb-6'>
				<h3 className='font-semibold text-xl'>Wallet Overview</h3>
				<WalletIcon size={28} />
			</div>
			<div className='grid gap-3'>
				<ListItem label='Total Airtime converted' value='40000' />
				<ListItem label='Total Airtime converted' value='40000' />
				<ListItem label='Total Airtime converted' value='40000' />
				<ListItem label='Total Airtime converted' value='40000' />
				<ListItem label='Total Airtime converted' value='40000' />
				<ListItem label='Total Airtime converted' value='40000' />
			</div>
		</div>
	);
};

export default WalletOverview;
