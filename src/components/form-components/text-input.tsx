import React, { ReactNode } from 'react';

interface ITextInput extends React.HTMLAttributes<HTMLInputElement> {
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	type?: string;
	label?: string;
	placeholder?: string;
}

const TextInput: React.FC<ITextInput> = ({
	className,
	startIcon,
	endIcon,
	type = 'text',
	label,
	...rest
}) => {
	return (
		<div>
			{label && <p className='mb-2'>{label}</p>}
			<div className='relative flex items-center'>
				{startIcon && <div className='absolute left-3'>{startIcon}</div>}
				<input
					type={type}
					autoComplete='off'
					className={`border border-gray-400 focus:ring-primary focus:border-primary  bg-white shadow-md rounded shadow-gray-300/40 placeholder:text-gray-400 text-gray-700 ${
						startIcon ? 'pl-12' : 'pl-4'
					}  ${endIcon ? 'pr-12' : 'pr-4'} py-3 w-full ${className}`}
					{...rest}
				/>
				{endIcon && <div className='absolute right-3'>{endIcon}</div>}
			</div>
		</div>
	);
};

export default TextInput;
