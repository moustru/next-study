import { setTypographyVariant } from '@/shared/utils/typography';

const Text = {
	variants: {
		xl: setTypographyVariant(32, 44),
		lg: setTypographyVariant(28, 34),
		md: setTypographyVariant(24, 30),
		sm: setTypographyVariant(20, 26),
		xs: setTypographyVariant(16, 22),
	},
};

export default Text;
