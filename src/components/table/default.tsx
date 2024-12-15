import React, { ReactNode } from 'react';
import { Pagination } from '../pagination';

interface IDefaultTable {
	header: ReactNode[];
	body: { [key: string]: any }[];
	hasPagination?: boolean;
}

const DefaultTable = ({ header, body, hasPagination }: IDefaultTable) => {
	// const pageCount = body && Array.isArray(body) ? body.length : 1;
	const pageCount = 10;
	return (
		<div>
			<table className='table-auto w-full'>
				<thead>
					{header && Array.isArray(header) && header.length > 0 && (
						<tr>
							{header.map((item, i) => (
								<th
									className='px-4 md:px-6 py-3 text-start '
									key={`${item}-${i}`}
								>
									{item}
								</th>
							))}
						</tr>
					)}
				</thead>
				<tbody className=''>
					{body &&
						Array.isArray(body) &&
						body.length > 0 &&
						body.map((bodyItem, j) => {
							const isLastItem = body.length - 1 === j;
							return (
								<React.Fragment key={j}>
									<tr
										key={j}
										className={`${
											j % 2 === 0 ? 'bg-primary/5' : 'bg-gray-100/40'
										} `}
									>
										{Object.values(bodyItem).map((item, i) => (
											<td className='px-4 md:px-6 py-3' key={`${item}-${i}`}>
												{item}
											</td>
										))}
									</tr>
									{!isLastItem && <tr className='h-1'></tr>}
								</React.Fragment>
							);
						})}
				</tbody>
			</table>
			{hasPagination && (
				<Pagination
					className='mt-5 w-full flex justify-end'
					pageCount={pageCount}
				/>
			)}
		</div>
	);
};

export default DefaultTable;
