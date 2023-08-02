import variants from './variants';

const Button = {
	baseStyle: {
		borderRadius: '12px',
	},

	variants,

	sizes: {
		md: {
			height: 'auto',
			paddingBlock: '14px',
			paddingInline: '32px',
			fontSize: 'var(--chakra-fontSizes-xl)',
			lineHeight: '26px',
			fontWeight: 'var(--chakra-fontWeights-medium)',
		},

		xl: {
			paddingBlock: '20px',
			paddingInline: '40px',
			fontSize: 'var(--chakra-fontSizes-3xl)',
			lineHeight: '34px',
			fontWeight: 'var(--chakra-fontWeights-medium)',
		},
	},
};

export default Button;
