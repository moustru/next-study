import { setTypographyVariant } from '@/shared/utils/typography';

const Text = {
	variants: {
		xl: setTypographyVariant(32, 44, 400),
		lg: setTypographyVariant(28, 34, 400),
		md: setTypographyVariant(24, 30, 400),
		sm: setTypographyVariant(20, 26, 400),
		xs: setTypographyVariant(16, 22, 400),
	},
};

export default Text;
