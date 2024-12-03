import { EyeIcon, EyeClosedIcon } from 'lucide-react';
import { useState } from 'react';
import { DefaultButton, TextInput } from '../../../../components';

const CreatePasswordForm = () => {
	const [isTogglePassword, setTogglePassword] = useState<boolean>(false);
	const [isToggleConfirmPassword, setToggleConfirmPassword] =
		useState<boolean>(false);
	return (
		<div className='grid gap-4'>
			<TextInput
				type={isTogglePassword ? 'text' : 'password'}
				endIcon={
					<button onClick={() => setTogglePassword(!isTogglePassword)}>
						{isTogglePassword ? (
							<EyeClosedIcon size={20} className='text-gray-500' />
						) : (
							<EyeIcon size={20} className='text-gray-500' />
						)}
					</button>
				}
				placeholder='New Password'
			/>
			<TextInput
				type={isToggleConfirmPassword ? 'text' : 'password'}
				endIcon={
					<button
						onClick={() => setToggleConfirmPassword(!isToggleConfirmPassword)}
					>
						{isTogglePassword ? (
							<EyeClosedIcon size={20} className='text-gray-500' />
						) : (
							<EyeIcon size={20} className='text-gray-500' />
						)}
					</button>
				}
				placeholder='Confirm Password'
			/>
			<DefaultButton className='mt-4'>Confirm</DefaultButton>
		</div>
	);
};

export default CreatePasswordForm;
