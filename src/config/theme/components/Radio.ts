const Radio = {
	variants: {
		card: {
			control: {
				width: '24px',
				height: '24px',
				borderColor: 'grey.400',

				_checked: {
					borderColor: 'basic.100',
					background: 'transparent',

					'&:before': {
						width: '16px',
						height: '16px',
						background: 'basic.100',
					},
				},
			},

			label: {
				display: 'block',
				width: '100%',
				overflow: 'hidden',
				marginLeft: '20px',
			},

			container: {
				paddingBlock: '16px',
				paddingInline: '24px',
				border: '1px solid transparent',
				borderRadius: '16px',
				backgroundColor: 'grey.50',
				transition: 'all .2s linear',

				_hover: {
					borderColor: 'grey.300',

					_disabled: {
						borderColor: 'transparent',
					},
				},

				_active: {
					borderColor: 'grey.500',
				},

				_disabled: {
					backgroundColor: 'grey.200',
				},
			},
		},
	},
};

export default Radio;
