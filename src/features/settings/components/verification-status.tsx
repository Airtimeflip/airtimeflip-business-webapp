import { VerifiedIcon, InfoIcon } from 'lucide-react';
import { DefaultButton } from '../../../components';

const VerificationStatus = () => {
	return (
		<div className='border rounded-md border-gray/10 flex-1 py-4 bg-white shadow-lg w-full'>
			<h2 className='capitalize px-4 md:px-6 text-lg font-semibold my-1'>
				Verification Status
			</h2>
			<div className='h-[0.5px] bg-gray-300 w-full my-4'></div>
			<div className='px-4 md:px-6'>
				<div className='py-8 flex gap-8 items-center justify-between'>
					<div className='flex gap-2 items-center text-primary'>
						<InfoIcon />
						<p>You account has not been verify</p>
					</div>
					<DefaultButton className='text-white flex gap-2 items-center !rounded-full px-8'>
						<VerifiedIcon />
						<span>Verify</span>
					</DefaultButton>
				</div>
			</div>
		</div>
	);
};

export default VerificationStatus;
