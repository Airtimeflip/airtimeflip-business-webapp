interface Props {
	width?: string;
	height?: string;
	color?: string;
}

const LogoutIcon = ({ color }: Props) => {
	return (
		<div>
			<svg
				width='21'
				height='21'
				viewBox='0 0 21 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M3.20387 0C2.36764 0.00342238 1.56663 0.337133 0.97532 0.928445C0.384008 1.51976 0.0502974 2.32077 0.046875 3.157V17.508C0.0502974 18.3442 0.384008 19.1452 0.97532 19.7366C1.56663 20.3279 2.36764 20.6616 3.20387 20.665H13.5369C14.3731 20.6616 15.1741 20.3279 15.7654 19.7366C16.3567 19.1452 16.6905 18.3442 16.6939 17.508C16.6939 17.2796 16.6032 17.0606 16.4417 16.8992C16.2802 16.7377 16.0612 16.647 15.8329 16.647C15.6045 16.647 15.3855 16.7377 15.2241 16.8992C15.0626 17.0606 14.9719 17.2796 14.9719 17.508C14.9736 17.6969 14.9377 17.8843 14.8662 18.0592C14.7947 18.2341 14.689 18.393 14.5554 18.5266C14.4218 18.6602 14.263 18.7658 14.0881 18.8373C13.9132 18.9088 13.7258 18.9447 13.5369 18.943H3.20387C3.01494 18.9447 2.82756 18.9088 2.65268 18.8373C2.47779 18.7658 2.31891 18.6602 2.18531 18.5266C2.05171 18.393 1.94607 18.2341 1.87457 18.0592C1.80307 17.8843 1.76714 17.6969 1.76888 17.508V3.157C1.76714 2.96807 1.80307 2.78069 1.87457 2.6058C1.94607 2.43092 2.05171 2.27203 2.18531 2.13843C2.31891 2.00484 2.47779 1.8992 2.65268 1.8277C2.82756 1.7562 3.01494 1.72026 3.20387 1.722H13.5369C13.7258 1.72026 13.9132 1.7562 14.0881 1.8277C14.263 1.8992 14.4218 2.00484 14.5554 2.13843C14.689 2.27203 14.7947 2.43092 14.8662 2.6058C14.9377 2.78069 14.9736 2.96807 14.9719 3.157C14.9719 3.38535 15.0626 3.60435 15.2241 3.76582C15.3855 3.92729 15.6045 4.018 15.8329 4.018C16.0612 4.018 16.2802 3.92729 16.4417 3.76582C16.6032 3.60435 16.6939 3.38535 16.6939 3.157C16.6902 2.32085 16.3564 1.51999 15.7651 0.928734C15.1739 0.337478 14.373 0.00368355 13.5369 0H3.20387ZM15.8239 5.444C15.6524 5.4439 15.4849 5.49499 15.3426 5.59072C15.2004 5.68645 15.09 5.82246 15.0255 5.98133C14.9611 6.1402 14.9455 6.3147 14.9809 6.48246C15.0162 6.65023 15.1008 6.80363 15.2239 6.923L17.7719 9.471H5.49988C5.38681 9.471 5.27485 9.49327 5.17038 9.53654C5.06592 9.57981 4.97101 9.64323 4.89106 9.72318C4.8111 9.80313 4.74768 9.89805 4.70441 10.0025C4.66115 10.107 4.63888 10.2189 4.63888 10.332C4.63888 10.4451 4.66115 10.557 4.70441 10.6615C4.74768 10.766 4.8111 10.8609 4.89106 10.9408C4.97101 11.0208 5.06592 11.0842 5.17038 11.1275C5.27485 11.1707 5.38681 11.193 5.49988 11.193H17.7729L15.2249 13.741C15.1449 13.821 15.0815 13.9159 15.0382 14.0204C14.9949 14.1249 14.9726 14.2369 14.9726 14.35C14.9726 14.4631 14.9949 14.5751 15.0382 14.6796C15.0815 14.7841 15.1449 14.879 15.2249 14.959C15.3048 15.039 15.3998 15.1024 15.5043 15.1457C15.6088 15.189 15.7208 15.2113 15.8339 15.2113C15.947 15.2113 16.059 15.189 16.1635 15.1457C16.268 15.1024 16.3629 15.039 16.4429 14.959L20.4609 10.941C20.5409 10.861 20.6043 10.7661 20.6476 10.6616C20.6909 10.5571 20.7132 10.4451 20.7132 10.332C20.7132 10.2189 20.6909 10.1069 20.6476 10.0024C20.6043 9.8979 20.5409 9.80296 20.4609 9.723L16.4429 5.705C16.3625 5.62223 16.2662 5.55648 16.1599 5.51164C16.0535 5.4668 15.9393 5.4438 15.8239 5.444Z'
					fill={color || '#026dee'}
				/>
			</svg>
		</div>
	);
};

export default LogoutIcon;
