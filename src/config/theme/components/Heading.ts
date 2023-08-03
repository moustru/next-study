import { setTypographyVariant } from '@/shared/utils/typography';

const Heading = {
	variants: {
		h1: setTypographyVariant(60, 72, 600),
		h2: setTypographyVariant(48, 58, 600),
		h3: setTypographyVariant(32, 38, 600),
		h4: setTypographyVariant(28, 34, 600),
	},
};

export default Heading;
