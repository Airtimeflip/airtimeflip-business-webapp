import { ReactNode } from 'react';

interface IListItem {
	title: string;
	description: string;
	children: ReactNode;
}

const ListItem = ({ title, description, children }: IListItem) => {
	return (
		<div className='self-start'>
			<div className='mb-4 max-w-[360px]'>
				<h4 className='font-medium'>{title}</h4>
				<p className='text-gray-500 text-[13px]'>{description}</p>
			</div>
			{children}
		</div>
	);
};

const Security = () => {
	return (
		<div className='border border-gray/10 flex-1 py-4 rounded-md h-full bg-white shadow-lg'>
			<h2 className='capitalize px-4 md:px-6 text-lg font-semibold my-1'>
				Security
			</h2>
			<div className='h-[0.5px] bg-primary/20 w-full my-4'></div>
			<div className='px-4 md:px-6 grid gap-6'>
				<ListItem
					title='Two factor authenticator'
					description={`Two factor authentication is an extra layer of security where we email you a code to verify it’s you before you login.`}
				>
					<div className='inline-flex border border-primary overflow-hidden rounded-md'>
						<button className='px-6 py-3 border-r border-r-primary min-w-[160px] bg-primary/20'>
							Activate
						</button>
						<button className='px-6 py-3 min-w-[160px] '>Deactivate</button>
					</div>
				</ListItem>
				<ListItem
					title='Reset password'
					description='Forgot your account password? You can reset it now!'
				>
					<button className='px-6 py-3 min-w-[160px] border border-primary rounded-md'>
						Reset
					</button>
				</ListItem>
				<ListItem
					title='Reset pin'
					description='Forgot your 4 digit pin? You can reset it now!'
				>
					<button className='px-6 py-3 min-w-[160px] border border-primary rounded-md'>
						Reset
					</button>
				</ListItem>
				<ListItem
					title='Delete account'
					description='Forgot your 4 digit pin? You can reset it now!'
				>
					<button className='px-6 py-3 min-w-[160px] border border-red-600 bg-red-700 text-white rounded-md'>
						Delete
					</button>
				</ListItem>
			</div>
		</div>
	);
};

export default Security;
