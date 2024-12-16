import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	isLoading?: boolean;
	loadingText?: string;
	disabled?: boolean;
}

const DefaultButton = ({
	children,
	className,
	isLoading,
	loadingText,
	disabled,
	...rest
}: Props) => {
	return (
		<button
			disabled={disabled}
			className={`bg-primary rounded-md px-4 py-3 ${className}`}
			{...rest}
		>
			{Boolean(loadingText && isLoading) ? loadingText : children}
		</button>
	);
};

export default DefaultButton;
