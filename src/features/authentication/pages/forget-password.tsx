import { ForgetPasswordForm } from '../components';

const ForgetPassword = () => {
	return (
		<div>
			<div className='mb-10'>
				<h1 className='text-xl sm:text-2xl md:text-3xl mb-2'>
					Forgot Password?
				</h1>
				<p className='text-gray-500'>Reset password in two quick steps</p>
			</div>
			<ForgetPasswordForm />
		</div>
	);
};

export default ForgetPassword;
