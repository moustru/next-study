import { setTypographyVariant } from '@/shared/utils/typography';

const Heading = {
	variants: {
		h1: {
			...setTypographyVariant(60, 72, 600),

			'@media screen and (max-width: 768px)': {
				...setTypographyVariant(48, 58, 600),
			},

			'@media screen and (max-width: 480px)': {
				...setTypographyVariant(32, 38, 600),
			},
		},

		h2: {
			...setTypographyVariant(48, 58, 600),

			'@media screen and (max-width: 768px)': {
				...setTypographyVariant(32, 38, 600),
			},

			'@media screen and (max-width: 480px)': {
				...setTypographyVariant(28, 34, 600),
			},
		},

		h3: {
			...setTypographyVariant(32, 38, 600),

			'@media screen and (max-width: 768px)': {
				...setTypographyVariant(28, 34, 600),
			},

			'@media screen and (max-width: 480px)': {
				...setTypographyVariant(24, 32, 600),
			},
		},
		h4: setTypographyVariant(28, 34, 600),
	},
};

export default Heading;
