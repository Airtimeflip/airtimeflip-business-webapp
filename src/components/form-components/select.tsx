import React, { ReactNode } from 'react';
import { Input, Select as MuiSelect } from '@material-tailwind/react';

interface ITextInput extends React.HTMLAttributes<HTMLInputElement> {
	children?: ReactNode;
}

const Select: React.FC<ITextInput> = ({ placeholder, className, children }) => {
	return (
		<div>
			<MuiSelect
				// icon={<MagnifyingGlassIcon className='h-6 w-6' />}
				// type='text'
				placeholder={placeholder}
				className={` focus:!border-t-orange-500 focus:!border-orange-500 !border focus:outline-1 !outline-orange-500 !border-orange-gray-50 bg-white shadow-sm shadow-orange-gray-900/5 placeholder:text-orange-gray-200 text-orange-gray-500 ${className}`}
				labelProps={{
					className: 'hidden',
				}}
				containerProps={{ className: 'min-w-[120px]' }}
			>
				{children}
			</MuiSelect>
		</div>
	);
};

export default Select;
