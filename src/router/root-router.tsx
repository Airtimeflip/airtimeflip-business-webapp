import { Routes } from 'react-router';
import { AuthenticationRoutes } from '../features';

const RootRouter = () => {
	return <Routes>{AuthenticationRoutes}</Routes>;
};

export default RootRouter;
