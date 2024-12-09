import { Link } from 'react-router';
import { ChevronRightIcon } from 'lucide-react';

interface Props {
	name: string;
	total: string;
	icon: any;
	link: string;
	bgColor?: string;
}
const TotalItem = ({ name, total, icon, link, bgColor = 'white' }: Props) => {
	console.log(bgColor);
	return (
		<div
			className={`rounded-md p-4 md:p-6 ${
				bgColor ? bgColor : 'bg-white'
			} flex flex-col`}
		>
			{icon}
			<h4 className='text-xl text-white font-semibold mt-3 mb-1'>{total}</h4>
			<p className='text-white'>{name}</p>
			<Link
				className='flex items-center text-white text-sm mt-1 self-start'
				to={link}
			>
				<span>View all</span>
				<ChevronRightIcon size={14} />
			</Link>
		</div>
	);
};

export default TotalItem;
