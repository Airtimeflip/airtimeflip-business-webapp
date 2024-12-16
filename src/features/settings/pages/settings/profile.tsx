import { PersonalInformation, VerificationStatus } from '../../components';

const Profile = () => {
	return (
		<div className=''>
			<PersonalInformation />
			<div className='h-10' />
			<VerificationStatus />
		</div>
	);
};

export default Profile;
