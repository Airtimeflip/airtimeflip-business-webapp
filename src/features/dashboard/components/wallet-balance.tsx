import React from 'react';

const WalletBalance = () => {
	return (
		<div className='bg-white drop-shadow border-[0.5px] border-primary/35 px-6 py-4 rounded-md flex items-center justify-between'>
			<h4 className='text-lg'>
				Total Wallet
				<br />
				Balance
			</h4>
			<h2 className='text-2xl font-bold'>10000</h2>
		</div>
	);
};

export default WalletBalance;
