interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const AppLogo = (props: Props) => {
	return (
		<div {...props}>
			<img src='/images/logo-with-text.png' alt='app-logo' />
		</div>
	);
};

export default AppLogo;
