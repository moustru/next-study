const Input = {
	variants: {
		outline: {
			field: {
				height: 'auto',
				paddingBlock: '16px',
				paddingInline: '30px',
				fontSize: ['16px', '16px', '24px', '32px', '32px', '32px'],
				lineHeight: ['22px', '22px', '33px', '44px', '44px', '44px'],
				backgroundColor: 'grey.50',
				borderColor: 'transparent',
				borderWidth: '0.5px',
				borderRadius: '16px',

				'&::placeholder': {
					color: 'grey.400',
				},

				_hover: {
					borderColor: 'grey.300',
				},

				_focus: {
					borderColor: 'basic.200',
					boxShadow: 'none',
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
