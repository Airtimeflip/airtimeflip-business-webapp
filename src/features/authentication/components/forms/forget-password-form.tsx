import { MailIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import { DefaultButton, TextInput } from '../../../../components';

const ForgetPasswordForm = () => {
	const navigate = useNavigate();
	const handleGoBack = () => navigate(-1);
	return (
		<div className='grid gap-4'>
			<TextInput
				endIcon={<MailIcon size={20} className='text-gray-500' />}
				placeholder='Email'
			/>
			<div className='flex flex-col gap-6'>
				<DefaultButton className='mt-4 uppercase'>Reset Password</DefaultButton>
				<button className='self-center' onClick={handleGoBack}>
					Back
				</button>
			</div>
		</div>
	);
};

export default ForgetPasswordForm;
