import { PropsWithChildren } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export default function RenderedHTML({ children }: PropsWithChildren) {
	const markup = renderToStaticMarkup(
		<html>
			<head />
			<body>{children}</body>
		</html>
	);
	return markup;
}
