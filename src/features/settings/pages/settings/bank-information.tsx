import { CheckCircleIcon, PlusIcon } from 'lucide-react';

const BankInformationItem = () => {
	return (
		<div>
			<div className='bg-primary/15 h-[120px] px-4 py-3 rounded-md shadow-lg flex items-center relative'>
				<div className='flex-1'>
					<h5 className='font-medium text-lg'>Name</h5>
					<p>Bank</p>
					<p>Account number</p>
				</div>
				<CheckCircleIcon className='text-primary absolute top-3 right-3' />
			</div>
			<button className='mt-2 text-sm text-red-600'>Delete account</button>
		</div>
	);
};

const AddBank = () => {
	return (
		<button className='h-[120px] flex flex-col gap-3 items-center justify-center bg-primary/15 px-4 py-3 rounded-md shadow-lg'>
			<PlusIcon />
			<p>Add bank account</p>
		</button>
	);
};

const BankInformation = () => {
	return (
		<div className='border border-gray/10 flex-1 py-4 rounded-md h-full bg-white shadow-lg'>
			<h2 className='capitalize px-4 md:px-6 text-lg font-semibold my-1'>
				Bank Information
			</h2>
			<div className='h-[0.5px] bg-primary/20 w-full my-4'></div>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 px-4 md:px-6'>
				<BankInformationItem />
				<BankInformationItem />
				<AddBank />
			</div>
		</div>
	);
};

export default BankInformation;
