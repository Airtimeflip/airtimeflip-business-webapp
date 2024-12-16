import React from 'react';
import Switch, { ReactSwitchProps } from 'react-switch';

interface IProps extends ReactSwitchProps {
	label?: string;
}

const SwitchButton = ({ label, ...rest }: IProps) => {
	return (
		<Switch
			checkedIcon={false}
			uncheckedIcon={false}
			{...rest}
			onColor='#026dee'
		/>
	);
};

export default SwitchButton;
