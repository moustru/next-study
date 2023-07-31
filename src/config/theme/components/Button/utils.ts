type ColorScheme = Partial<Record<'bg' | 'color', string>>;

type ButtonVariant = Partial<
	Record<'base' | 'hover' | 'active' | 'disabled', ColorScheme>
>;

export const setButtonVariant = ({
	base,
	hover,
	active,
	disabled,
}: ButtonVariant) => ({
	backgroundColor: base?.bg,
	color: base?.color,

	_hover: {
		backgroundColor: hover?.bg,
		color: hover?.color,

		_disabled: {
			backgroundColor: disabled?.bg,
			color: disabled?.color,
		},
	},

	_active: {
		backgroundColor: active?.bg,
		color: active?.color,
	},

	_disabled: {
		backgroundColor: disabled?.bg,
		color: disabled?.color,
	},
});
