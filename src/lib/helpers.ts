export const hideContent = (
	value: string | number,
	asteriskLength?: number
) => {
	let length = value.toString().length;

	if (asteriskLength) length = asteriskLength;

	let hiddenValue = '';
	for (let i = 1; i <= length; i++) {
		hiddenValue += '*';
	}

	return hiddenValue;
};

export const generateRandomNumber = ({
	length,
	suggestion,
}: {
	length: number;
	suggestion?: string;
}) => {
	let text = '';
	const str =
		suggestion ||
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy0123456789';
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < length; i++) {
		text += str.charAt(Math.floor(Math.random() * str.length));
	}
	return text;
};

export const capitalize = (text: string) => {
	if (!text) return text;

	const splitString = text.split(' ');
	return splitString
		.map(
			(value) =>
				`${value.charAt(0).toUpperCase()}${value.substring(1).toLowerCase()}`
		)
		.join(' ');
};

export const removeSpace = (value: string) => value.replace(/\s/g, '');

export const formatNumberToCurrency = (
	value: string | number,
	currencyCode = 'NGN'
) =>
	`${currencyCode} ${value
		.toString()
		.replace(/\B(?=(?=\d*)(\d{3})+(?!\d))/g, ',')}`;

export const removeSpecialChar = (text: string) => {
	if (!text) return text;
	return text.replace(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, ' ');
};

export const formatAmount = (amount: string) => {
	if (!amount) return '';
	const splitAmount = amount.toString().split('.');
	const rest = splitAmount[1] ? `.${splitAmount[1]}` : '';
	return `${splitAmount[0].replace(/,/g, '')}${rest}`;
};
