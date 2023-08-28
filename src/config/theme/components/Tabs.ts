const Tabs = {
	baseStyle: {
		tablist: {
			backgroundColor: 'light.100',
			width: 'max-content',
			padding: '10px',
			gap: '12px',
			borderRadius: '12px',
			borderBottom: '4px solid red',
			'@media screen and (max-width: 768px)': {
				width: '100%',
				flexDirection: 'column-reverse',
			},
		},
		tabpanel: {
			paddingInline: 0,
			paddingBlockStart: 10,
		},
		tab: {
			paddingInlineEnd: '0 !important',
			paddingInlineStart: 0,
			paddingBlock: 0,
			color: 'basic.200',
			fontSize: '20px',
			borderRadius: '10px',
			fontWeight: 600,
			_selected: {
				color: 'basic.200',
				bg: 'rgba(64, 127, 252, 0.08)',
				borderRadius: '10px',
			},
		},
	},
};

export default Tabs;
