import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import { ChevronRightIcon, ChevronLeftIcon, EllipsisIcon } from 'lucide-react';

interface IProps extends ReactPaginateProps {
	className?: string;
}

const DefaultPagination = ({
	className,
	pageRangeDisplayed = 5,
	...rest
}: IProps) => {
	return (
		<div className={className}>
			<ReactPaginate
				{...rest}
				className='flex gap-1 items-center'
				activeLinkClassName='!border-primary text-white bg-primary'
				pageLinkClassName='border-gray-300 border h-10 w-10 flex items-center justify-center'
				breakLabel={<EllipsisIcon size={16} />}
				breakClassName='h-10 w-6 flex items-center justify-center'
				nextLabel={<ChevronRightIcon size={16} />}
				nextClassName='border-gray-300 border h-10 w-10 flex items-center justify-center'
				previousLabel={<ChevronLeftIcon size={16} />}
				previousClassName='border-gray-300 border h-10 w-10 flex items-center justify-center'
				pageRangeDisplayed={pageRangeDisplayed}
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default DefaultPagination;
