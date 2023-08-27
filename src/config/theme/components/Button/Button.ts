import variants from './variants';

const Button = {
	baseStyle: {
		borderRadius: '16px',
		fontWeight: '400',
		transition: 'color 0.3s',
	},

	variants,

	sizes: {
		md: {
			height: 'auto',
			paddingBlock: '14px',
			paddingInline: '32px',
			fontSize: 'var(--chakra-fontSizes-xl)',
			lineHeight: '1.8',
		},

		xl: {
			paddingBlock: '20px',
			paddingInline: '40px',
			fontSize: 'var(--chakra-fontSizes-3xl)',
			lineHeight: '1.2',
		},
	},
};

export default Button;
