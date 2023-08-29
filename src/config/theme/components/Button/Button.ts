import variants from './variants';

const Button = {
	baseStyle: {
		fontWeight: '400',
		transition: 'color 0.3s',
	},

	variants,

	sizes: {
		xs: {
			height: 'auto',
			paddingBlock: '7px',
			paddingInline: '16px',
			fontSize: 'var(--chakra-fontSizes-md)',
			lineHeight: '1.3',
			borderRadius: '12px',
		},

		md: {
			gap: '0.75rem',
			height: 'auto',
			paddingBlock: '14px',
			paddingInline: '32px',
			fontSize: 'var(--chakra-fontSizes-xl)',
			lineHeight: '1.3',
			borderRadius: '12px',
		},

		lg: {
			gap: '1rem',
			height: '72px',
			paddingBlock: '19px',
			paddingInline: '40px',
			fontSize: '1.75rem',
			lineHeight: '1.2',
			borderRadius: '16px',
		},

		xl: {
			paddingBlock: '20px',
			paddingInline: '40px',
			fontSize: 'var(--chakra-fontSizes-3xl)',
			lineHeight: '1.3',
			borderRadius: '16px',
		},
	},
};

export default Button;
