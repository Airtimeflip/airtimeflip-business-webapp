import { MailIcon, EyeIcon, EyeClosedIcon } from 'lucide-react';
import { useState } from 'react';
import { DefaultButton, DefaultLink, TextInput } from '../../../../components';
import { ROUTE_PATH } from '../../../../utils';

const LoginForm = () => {
	const [isTogglePassword, setTogglePassword] = useState<boolean>(false);
	return (
		<div className='grid gap-4'>
			<TextInput
				endIcon={<MailIcon size={20} className='text-gray-500' />}
				placeholder='Email'
			/>
			<div className='flex flex-col'>
				<TextInput
					type={isTogglePassword ? 'text' : 'password'}
					endIcon={
						<button onClick={() => setTogglePassword(!isTogglePassword)}>
							{isTogglePassword ? (
								<EyeIcon size={20} className='text-gray-500' />
							) : (
								<EyeClosedIcon size={20} className='text-gray-500' />
							)}
						</button>
					}
					placeholder='Password'
				/>
				<DefaultLink
					className='self-end mt-2 text-primary'
					to={`/${ROUTE_PATH.auth.index}/${ROUTE_PATH.auth.forgetPassword}`}
				>
					Forgot password?
				</DefaultLink>
			</div>
			<DefaultButton className='mt-4'>Login</DefaultButton>
		</div>
	);
};

export default LoginForm;
