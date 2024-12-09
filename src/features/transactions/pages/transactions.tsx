import React from 'react';
import { Table } from '../../../components';

const BODIES = [
	{
		sn: 1,
		name: 'Emmanuel',
		email: 'emmanuel@gmail.com',
		createdAt: '1234',
		amount: '1000',
	},
	{ sn: 2, name: 'Tochukwu', email: 'tochukwu@gmail.com' },
	{ sn: 3, name: 'John', email: 'john@gmail.com' },
];

const TransactionPage = () => {
	return (
		<div>
			<Table
				hasPagination
				header={['SN', 'User', 'Email', 'Amount']}
				body={BODIES.map((item) => {
					return {
						sn: item.sn,
						name: item.name,
						email: item.email,
						amount: item.amount,
					};
				})}
			/>
		</div>
	);
};

export default TransactionPage;
