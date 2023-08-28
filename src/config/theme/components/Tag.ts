const Tag = {
	sizes: {
		sm: {
			container: {
				paddingBlock: '4px',
				paddingInline: '10px',
				fontSize: '16px',
				lineHeight: '22px',
				borderRadius: '9px',
			},
		},

		md: {
			container: {
				paddingBlock: '6px',
				paddingInline: '12px',
				fontSize: '20px',
				lineHeight: '26px',
				borderRadius: '12px',
			},
		},
	},

	variants: {
		default: {
			container: {
				backgroundColor: 'grey.200',
				color: 'grey.500',
				fontWeight: 400,
			},
		},

		dark: {
			container: {
				backgroundColor: 'grey.400',
				color: 'light.100',
			},
		},
	},
};

export default Tag;
