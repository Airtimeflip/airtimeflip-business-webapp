import { Link } from 'react-router';
const SERVICES = [
	{
		title: 'Convert Airtime',
		description: `Easily convert your over recharged airtime and get paid in minutes.`,
		imagePath: '/images/svg/convert-airtime.svg',
		link: '/',
	},
	{
		title: 'Bill Payments',
		description: `Conveniently make cable, power, educational and several other bills.`,
		imagePath: '/images/svg/convert-airtime.svg',
		link: '/',
	},
	{
		title: 'Airtime Purchase',
		description: `Make airtime purchases to any network and pay from your mobile wallet.`,
		imagePath: '/images/svg/purchase-airtime.svg',
		link: '/',
	},
	{
		title: 'Data Purchase',
		description:
			'Make data purchases to any network and pay from your mobile wallet.',
		imagePath: '/images/svg/purchase-data.svg',
		link: '/',
	},
	{
		title: 'Fund Betting Account',
		description:
			'Let us help you fund your betting account to bet on your favorite teams.',
		imagePath: '/images/svg/convert-airtime.svg',
		link: '/',
	},
];

interface IServiceItem {
	title: string;
	description: string;
	imagePath: string;
	link: string;
}

const ServiceItem = ({ title, description, imagePath, link }: IServiceItem) => {
	return (
		<Link
			to={link}
			className='bg-primary/10 h-[160px] rounded-md p-4 flex flex-col items-center justify-center'
		>
			<div className='mb-4'>
				<img src={imagePath} alt={title} />
			</div>
			<h5 className='text-base font-medium mb-1'>{title}</h5>
			<p className='text-gray-500 text-sm text-center'>{description}</p>
		</Link>
	);
};

const DefaultServices = () => {
	return (
		<div>
			<h3 className='font-semibold text-2xl mb-4'>Services</h3>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 max-w-[960px] gap-8 md:gap-4'>
				{SERVICES.map((item, i) => (
					<ServiceItem key={i} {...item} />
				))}
			</div>
		</div>
	);
};

export default DefaultServices;
