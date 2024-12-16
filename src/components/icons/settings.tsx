interface Props {
	width?: string;
	height?: string;
	color?: string;
}

const SettingsIcon = ({ width, height, color }: Props) => {
	return (
		<div>
			<svg
				width={width || '24'}
				height={height || '24'}
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_3789_27536)'>
					<path
						d='M12.0015 17.2765C14.9148 17.2765 17.2765 14.9148 17.2765 12.0015C17.2765 9.08825 14.9148 6.72656 12.0015 6.72656C9.08825 6.72656 6.72656 9.08825 6.72656 12.0015C6.72656 14.9148 9.08825 17.2765 12.0015 17.2765Z'
						// fill='#DCE3E7'
						fill='white'
					/>
					<path
						d='M11.9969 17.9312C8.72467 17.9312 6.0625 15.2691 6.0625 11.9969C6.0625 8.72467 8.72467 6.0625 11.9969 6.0625C15.2691 6.0625 17.9312 8.72467 17.9312 11.9969C17.9312 15.2691 15.2691 17.9312 11.9969 17.9312ZM11.9969 7.38128C9.45179 7.38128 7.38123 9.45184 7.38123 11.9969C7.38123 14.542 9.45179 16.6125 11.9969 16.6125C14.5419 16.6125 16.6125 14.542 16.6125 11.9969C16.6125 9.45184 14.5419 7.38128 11.9969 7.38128Z'
						fill={color || '#28536B'}
					/>
					<path
						d='M13.0929 23.9968H10.9006C10.1408 23.9968 9.52275 23.3787 9.52275 22.6189V21.7183C8.58876 21.4819 7.70091 21.114 6.87221 20.6199L6.23503 21.2571C5.97755 21.5146 5.56004 21.5146 5.30251 21.2571C5.04497 20.9996 5.04502 20.5821 5.30251 20.3245L6.31275 19.3143C6.53564 19.0915 6.88496 19.0574 7.14666 19.2332C8.10947 19.8799 9.17344 20.3208 10.3091 20.5436C10.6184 20.6044 10.8414 20.8755 10.8414 21.1907V22.6189C10.8414 22.6515 10.8679 22.6779 10.9005 22.6779H13.0928C13.1254 22.6779 13.1519 22.6515 13.1519 22.6189V21.1907C13.1519 20.8755 13.375 20.6044 13.6843 20.5436C14.8199 20.3207 15.8839 19.8799 16.8467 19.2332C17.1084 19.0575 17.4578 19.0915 17.6806 19.3143L18.6908 20.3245C18.7138 20.3476 18.7513 20.3476 18.7743 20.3245L20.3246 18.7743C20.3476 18.7513 20.3476 18.7138 20.3246 18.6908L19.3143 17.6806C19.0915 17.4577 19.0575 17.1083 19.2332 16.8467C19.8799 15.8838 20.3208 14.8199 20.5436 13.6842C20.6044 13.3749 20.8755 13.1519 21.1907 13.1519H22.6189C22.6515 13.1519 22.678 13.1254 22.678 13.0928V10.9005C22.678 10.8679 22.6515 10.8414 22.6189 10.8414H21.1907C20.8755 10.8414 20.6044 10.6183 20.5436 10.3091C20.3208 9.17342 19.8799 8.10941 19.2332 7.14664C19.0575 6.88499 19.0915 6.53558 19.3143 6.31274L20.3246 5.30249C20.582 5.045 20.9996 5.045 21.2571 5.30249C21.5147 5.55997 21.5146 5.97749 21.2571 6.23502L20.6199 6.87219C21.1141 7.70084 21.4819 8.58875 21.7183 9.52273H22.6189C23.3787 9.52273 23.9968 10.1408 23.9968 10.9006V13.0929C23.9968 13.8527 23.3787 14.4708 22.6189 14.4708H21.7183C21.4819 15.4047 21.114 16.2926 20.6199 17.1213L21.2571 17.7585C21.7943 18.2957 21.7943 19.1697 21.2571 19.707L19.7069 21.2572C19.1697 21.7944 18.2956 21.7944 17.7584 21.2572L17.1212 20.62C16.2926 21.1142 15.4047 21.482 14.4707 21.7184V22.619C14.4708 23.3787 13.8527 23.9968 13.0929 23.9968Z'
						fill={color || '#28536B'}
					/>
					<path
						d='M3.20587 18.8874C3.03712 18.8874 2.86832 18.823 2.7396 18.6942C2.48212 18.4367 2.48212 18.0192 2.7396 17.7617L3.37682 17.1245C2.88267 16.2958 2.51484 15.4079 2.27845 14.4739H1.37784C0.618093 14.474 0 13.8559 0 13.0962V10.9039C0 10.1441 0.618093 9.52601 1.37784 9.52601H2.2785C2.51479 8.59203 2.88276 7.70417 3.37687 6.87547L2.73965 6.2383C2.20246 5.70111 2.20246 4.82704 2.73965 4.2898L4.2899 2.73956C4.82708 2.20237 5.70116 2.20242 6.23839 2.73956L6.87557 3.37678C7.70422 2.88271 8.59203 2.51479 9.52611 2.2784V1.37784C9.52606 0.618093 10.1441 0 10.9038 0H13.0961C13.8559 0 14.474 0.618093 14.474 1.37784V2.2785C15.4081 2.51489 16.2959 2.88281 17.1245 3.37687L17.7617 2.73965C18.0192 2.48217 18.4367 2.48217 18.6943 2.73965C18.9519 2.99714 18.9518 3.41465 18.6943 3.67218L17.684 4.68243C17.4611 4.90523 17.1118 4.9393 16.8501 4.76352C15.8874 4.11688 14.8234 3.67602 13.6877 3.45309C13.3784 3.39234 13.1554 3.12121 13.1554 2.80603V1.37784C13.1554 1.34526 13.1289 1.31878 13.0963 1.31878H10.9039C10.8714 1.31878 10.8449 1.34526 10.8449 1.37784V2.80603C10.8449 3.12121 10.6218 3.39234 10.3125 3.45309C9.17684 3.67598 8.11278 4.11688 7.15011 4.76352C6.88846 4.9393 6.53905 4.90527 6.31621 4.68243L5.30577 3.67213C5.28276 3.64898 5.2453 3.64907 5.22229 3.67213L3.67209 5.22238C3.64907 5.2454 3.64907 5.28285 3.67209 5.30587L4.68233 6.31611C4.90513 6.539 4.93916 6.88836 4.76343 7.15002C4.1167 8.11283 3.67584 9.1768 3.45299 10.3124C3.39224 10.6218 3.12112 10.8448 2.80593 10.8448H1.37775C1.34517 10.8448 1.31868 10.8713 1.31868 10.9039V13.0962C1.31868 13.1288 1.34517 13.1553 1.37775 13.1553H2.80593C3.12112 13.1553 3.39224 13.3783 3.45299 13.6876C3.67588 14.8233 4.11674 15.8873 4.76343 16.85C4.93916 17.1117 4.90513 17.4611 4.68233 17.6839L3.67209 18.6942C3.54332 18.823 3.37462 18.8874 3.20587 18.8874Z'
						fill={color || '#28536B'}
					/>
				</g>
				<defs>
					<clipPath id='clip0_3789_27536'>
						<rect width='24' height='24' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
};

export default SettingsIcon;
