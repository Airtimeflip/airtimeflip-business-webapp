interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const AppLogo = (props: Props) => {
	return (
		<div {...props}>
			<img src='/images/app-logo.svg' alt='app-logo' />
		</div>
	);
};

export default AppLogo;
