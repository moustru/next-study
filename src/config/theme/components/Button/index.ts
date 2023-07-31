import variants from './variants';

const Button = {
	baseStyle: {
		borderRadius: '12px',
		paddingBlock: '14px',
		paddingInline: '32px',
	},

	variants,

	sizes: {
		sm: {
			height: 'auto',
			fontSize: 'var(--chakra-fontSizes-xl)',
			lineHeight: '26px',
			fontWeight: 'var(--chakra-fontWeights-medium)',
		},

		md: {
			height: 'auto',
			fontSize: 'var(--chakra-fontSizes-3xl)',
			lineHeight: '34px',
			fontWeight: 'var(--chakra-fontWeights-medium)',
		},
	},
};

export default Button;
