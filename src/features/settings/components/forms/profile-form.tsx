import { TextInput, DefaultButton } from '../../../../components';

const ProfileForm = () => {
	return (
		<form>
			<div className='grid grid-cols-2 gap-5 mb-5'>
				<TextInput label='First name' placeholder='First name' />
				<TextInput label='Last name' placeholder='Last name' />
				<TextInput label='Email' placeholder='Email' />
				<TextInput label='Phone' placeholder='Phone' />
			</div>
			<DefaultButton disabled className='w-full text-white'>
				Save Changes
			</DefaultButton>
		</form>
	);
};

export default ProfileForm;
