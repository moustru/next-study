import { setTypographyVariant } from '@/shared/utils/typography';

const Text = {
	variants: {
		xl: {
			...setTypographyVariant(32, 44),

			'@media screen and (max-width: 768px)': {
				...setTypographyVariant(28, 34),
			},

			'@media screen and (max-width: 480px)': {
				...setTypographyVariant(24, 30),
			},
		},

		lg: {
			...setTypographyVariant(28, 34),

			'@media screen and (max-width: 768px)': {
				...setTypographyVariant(24, 30),
			},

			'@media screen and (max-width: 480px)': {
				...setTypographyVariant(20, 26),
			},
		},

		md: {
			...setTypographyVariant(24, 30),

			'@media screen and (max-width: 768px)': {
				...setTypographyVariant(20, 26),
			},

			'@media screen and (max-width: 480px)': {
				...setTypographyVariant(16, 22),
			},
		},

		sm: {
			...setTypographyVariant(20, 26),

			'@media screen and (max-width: 768px)': {
				...setTypographyVariant(16, 22),
			},

			'@media screen and (max-width: 480px)': {
				...setTypographyVariant(14, 20),
			},
		},

		xs: {
			...setTypographyVariant(16, 22),

			'@media screen and (max-width: 768px)': {
				...setTypographyVariant(14, 20),
			},

			'@media screen and (max-width: 480px)': {
				...setTypographyVariant(12, 18),
			},
		},
	},
};

export default Text;
