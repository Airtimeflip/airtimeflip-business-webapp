interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const AppLogo = (props: Props) => {
	return (
		<div {...props}>
			<img className='w-full' src='/images/app-logo.png' alt='app-logo' />
		</div>
	);
};

export default AppLogo;
