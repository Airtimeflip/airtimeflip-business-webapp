import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	isLoading?: boolean;
	loadingText?: string;
}

const DefaultButton = ({
	children,
	className,
	isLoading,
	loadingText,
	...rest
}: Props) => {
	return (
		<button
			className={`bg-primary rounded-md px-4 py-3 ${className}`}
			{...rest}
		>
			{Boolean(loadingText && isLoading) ? loadingText : children}
		</button>
	);
};

export default DefaultButton;
