const Input = {
	variants: {
		outline: {
			field: {
				height: 'auto',
				paddingBlock: '16px',
				paddingInline: '30px',
				fontSize: '32px',
				lineHeight: '44px',
				backgroundColor: 'grey.50',
				borderColor: 'transparent',

				_hover: {
					borderColor: 'grey.300',
				},

				_focus: {
					borderColor: 'basic.200',
				},

				_disabled: {
					backgroundColor: 'grey.200',

					_hover: {
						backgroundColor: 'grey.200',
						borderColor: 'transparent',
					},
				},
			},
		},
	},
};

export default Input;
