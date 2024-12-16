import { Link } from 'react-router';

interface IQuickServiceItem {
	title: string;
	imageSrc: string;
	description: string;
}

const QUICK_SERVICES = [
	{
		title: 'Convert airtime',
		description: `Convert your airtime to cash at amazing rates`,
		imageSrc: '/images/svg/convert-airtime.svg',
	},
	{
		title: 'Instant airtime',
		description: `Convert your airtime to cash at amazing rates`,
		imageSrc: '/images/svg/convert-airtime.svg',
	},
	{
		title: 'Purchase data',
		description: `Convert your airtime to cash at amazing rates`,
		imageSrc: '/images/svg/purchase-data.svg',
	},
	{
		title: 'Purchase airtime',
		description: `Convert your airtime to cash at amazing rates`,
		imageSrc: '/images/svg/purchase-airtime.svg',
	},
	{
		title: 'Pay power',
		description: `Convert your airtime to cash at amazing rates`,
		imageSrc: '/images/svg/convert-airtime.svg',
	},
];

const QuickServiceItem = ({
	title,
	description,
	imageSrc,
}: IQuickServiceItem) => {
	return (
		<button className='bg-gray-100 p-4 sm:p-6 h-[140px] md:h-[160px] w-[140px] md:w-[180px] shrink-0 rounded-md flex flex-col items-center justify-center'>
			<div className='w-[25px] mb-3 flex justify-center'>
				<img src={imageSrc} alt={title} />
			</div>
			<h3 className='text-center font-medium text-base'>{title}</h3>
			<p className='text-center text-sm text-gray-500'>{description}</p>
		</button>
	);
};

const QuickServices = () => {
	return (
		<div className='overflow-hidden'>
			<div className='flex gap-4 items-center justify-between mb-4'>
				<h2 className='text-2xl font-semibold'>Quick Services</h2>
				<Link to='/'>View all</Link>
			</div>
			<div className='flex overflow-x-scroll gap-4 no-scrollbar'>
				{QUICK_SERVICES.map((item, key) => (
					<QuickServiceItem key={key} {...item} />
				))}
			</div>
		</div>
	);
};

export default QuickServices;
