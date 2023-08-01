const Radio = {
	variants: {
		card: {
			control: {
				borderColor: 'grey.400',
			},

			label: {
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
