import { CreatePasswordForm } from '../components';

const CreatePassword = () => {
	return (
		<div>
			<h1 className='text-xl sm:text-2xl md:text-3xl mb-6'>
				Create New Password
			</h1>
			<CreatePasswordForm />
		</div>
	);
};

export default CreatePassword;
