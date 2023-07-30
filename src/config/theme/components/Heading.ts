import { setTypographyVariant } from '@/shared/utils/typography';

const Heading = {
	variants: {
		h1: setTypographyVariant(60, 72),
		h2: setTypographyVariant(48, 58),
		h3: setTypographyVariant(32, 38),
		h4: setTypographyVariant(28, 34),
	},
};

export default Heading;
