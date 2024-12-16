import { CameraIcon } from 'lucide-react';

const ProfilePicture = () => {
	return (
		<div className=''>
			<p className='mb-4'>Profile Picture</p>
			<div className='relative inline-block'>
				<div className='h-[100px] w-[100px] bg-gray-200 rounded-full'></div>
				<button className='h-[40px] w-[40px] bg-white drop-shadow-xl rounded-full flex items-center justify-center absolute right-0 bottom-[5px]'>
					<CameraIcon />
				</button>
			</div>
		</div>
	);
};

export default ProfilePicture;
