import { Link, LinkProps } from 'react-router';

interface Props extends LinkProps {}

const DefaultLink = ({ children, ...rest }: Props) => {
	return <Link {...rest}>{children}</Link>;
};

export default DefaultLink;
