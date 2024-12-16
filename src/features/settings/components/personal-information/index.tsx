import { ProfileForm } from '../forms';
import ProfilePicture from './profile-picture';

const PersonalInformation = () => {
	return (
		<div className='border border-gray/10 flex-1 py-4 rounded-md h-full bg-white shadow-lg'>
			<h2 className='capitalize px-4 md:px-6 text-lg font-semibold my-1'>
				Profile
			</h2>
			<div className='h-[0.5px] bg-primary/20 w-full my-4'></div>
			<div className='px-4 md:px-6'>
				<ProfilePicture />
				<div className='h-8' />
				<ProfileForm />
			</div>
		</div>
	);
};

export default PersonalInformation;
