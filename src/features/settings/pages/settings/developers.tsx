import { useState } from 'react';
import { CopyIcon } from 'lucide-react';
import { DefaultButton, SwitchButton } from '../../../../components';
import { generateRandomNumber } from '../../../../lib';

interface IListItem {
	label: string;
	value: string;
}

const ListItem = ({ label, value }: IListItem) => {
	return (
		<div>
			<p className='mb-1'>{label}</p>
			<div className='bg-primary/20 p-4 rounded-md flex items-center gap-4 justify-between'>
				<p className='text-gray-600'>{value}</p>
				<button>
					<CopyIcon />
				</button>
			</div>
		</div>
	);
};

const Developers = () => {
	const [isToggleLive, setToggleLive] = useState(false);
	return (
		<div className='border border-gray/10 flex-1 py-4 rounded-md h-full bg-white shadow-lg'>
			<div className='flex items-center justify-between gap-4 px-4 md:px-6 mb-4'>
				<h2 className='capitalize text-lg font-semibold my-1'>Developer</h2>
				<div className='flex gap-2 items-center'>
					<SwitchButton
						checked={isToggleLive}
						onChange={() => setToggleLive(!isToggleLive)}
					/>
					<p className='font-medium'>
						{isToggleLive ? 'Live mode' : 'Test mode'}
					</p>
				</div>
			</div>
			<div className='flex items-center gap-6 px-4 md:px-6'>
				<button className='font-medium text-primary'>API keys</button>
				<button className='text-gray-300' disabled>
					Webhook
				</button>
			</div>
			<div className='h-[0.5px] bg-primary/20 w-full my-5'></div>
			<div className='gap-4 px-4 md:px-6 grid'>
				<ListItem
					label='Public key'
					value={`AF-Test-${generateRandomNumber({ length: 40 })}`}
				/>
				<ListItem
					label='Secret key'
					value={`AF-Test-${generateRandomNumber({ length: 40 })}`}
				/>
				<DefaultButton className='!rounded-full text-white'>
					Generate new keys
				</DefaultButton>
			</div>
		</div>
	);
};

export default Developers;
