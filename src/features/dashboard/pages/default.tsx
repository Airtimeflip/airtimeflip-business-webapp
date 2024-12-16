import {
	WalletBalance,
	TotalItem,
	WalletOverview,
	QuickServices,
} from '../components';

import { TransactionIcon, Table } from '../../../components';
import { Link } from 'react-router';
import { RenderedHTML } from '../../../lib';

const TRANSACTIONS = [
	{ name: 'John Doe', network: 'MTN', phone: '08109022197', amount: '2000' },
	{ name: 'John Doe', network: 'MTN', phone: '08109022197', amount: '2000' },
	{ name: 'John Doe', network: 'MTN', phone: '08109022197', amount: '2000' },
	{ name: 'John Doe', network: 'MTN', phone: '08109022197', amount: '2000' },
	{ name: 'John Doe', network: 'MTN', phone: '08109022197', amount: '2000' },
];

const RecentTransactions = () => {
	return (
		<div className='border-[0.5px] border-primary/40 rounded-md overflow-hidden py-4'>
			<title>Dashboard | Airtimeflip Business</title>
			<div className='mb-4 flex items-center justify-between gap-4 px-6'>
				<h3 className='text-2xl font-semibold'>Recent Transactions</h3>
				<Link className='text-primary' to={'/'}>
					View all
				</Link>
			</div>
			<Table
				header={['Full name', 'Network Name', 'Phone No.', 'Amount']}
				body={TRANSACTIONS.map((item) => ({
					name: item.name,
					network: item.network,
					phone: item.phone,
					amount: item.amount,
				}))}
			/>
		</div>
	);
};

const Dashboard = () => {
	return (
		<div className='grid md:grid-cols-[1.5fr_1fr] gap-8'>
			<div className='grid gap-8'>
				<WalletBalance />
				<QuickServices />
				<div className='grid md:grid-cols-3 gap-6'>
					<TotalItem
						total='5000'
						name='Total Transactions'
						link='/'
						icon={<TransactionIcon color='white' />}
						bgColor={'bg-primary'}
					/>
					<TotalItem
						total='5000'
						name='Total Users'
						link='/'
						icon={<TransactionIcon color='white' />}
						bgColor={'bg-green-600'}
					/>
					<TotalItem
						total='5000'
						name='Total Conversions'
						link='/'
						icon={<TransactionIcon color='white' />}
						bgColor={'bg-[#2FAE9E]'}
					/>
				</div>
				<RecentTransactions />
			</div>
			<div className='shrink-0'>
				<WalletOverview />
			</div>
		</div>
	);
};

export default Dashboard;
