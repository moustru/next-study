const Radio = {
	variants: {
		card: {
			control: {
				width: '24px',
				height: '24px',
				borderColor: 'grey.400',

				'@media screen and (max-width: 768px)': {
					width: '16px',
					height: '16px',
				},

				_checked: {
					borderColor: 'basic.100',
					background: 'transparent',

					'&:before': {
						width: '16px',
						height: '16px',
						background: 'basic.100',
						'@media screen and (max-width: 768px)': {
							width: '8px',
							height: '8px',
						},
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

				_checked: {
					borderColor: 'transparent',
				},

				_disabled: {
					backgroundColor: 'transparent',
				},
			},
		},
	},
};

export default Radio;
