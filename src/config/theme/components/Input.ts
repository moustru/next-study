const Input = {
	variants: {
		outline: {
			field: {
				height: 'auto',
				paddingBlock: '16px',
				paddingInline: '30px',
				fontSize: ['16px', '16px', '24px', '32px', '32px', '32px'],
				lineHeight: '1.2',
				backgroundColor: 'grey.50',
				borderColor: 'transparent',
				borderWidth: 'inherit',
				borderRadius: '16px',

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
