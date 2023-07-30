import localFont from 'next/font/local';

const circe400 = localFont({
	src: [
		{
			path: '../../../public/fonts/Circe-Light.woff2',
			weight: '400',
			style: 'normal',
		},
	],
});

const circe500 = localFont({
	src: [
		{
			path: '../../../public/fonts/Circe-Regular.woff2',
			weight: '500',
			style: 'normal',
		},
	],
});

const circe600 = localFont({
	src: [
		{
			path: '../../../public/fonts/Circe-Bold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
});

export { circe400, circe500, circe600 };
