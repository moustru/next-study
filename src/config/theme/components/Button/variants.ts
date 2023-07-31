import { setButtonVariant } from './utils';

const variants = {
	blue: setButtonVariant({
		base: {
			bg: 'basic.200',
			color: 'light.100',
		},

		hover: {
			bg: 'basic.300',
		},

		active: {
			bg: 'basic.400',
		},

		disabled: {
			bg: 'grey.200',
			color: 'grey.300',
		},
	}),

	dark: setButtonVariant({
		base: {
			bg: 'grey.600',
			color: 'light.100',
		},

		hover: {
			bg: 'grey.500',
		},

		active: {
			bg: 'grey.400',
		},

		disabled: {
			bg: 'grey.300',
			color: 'grey.400',
		},
	}),

	light: setButtonVariant({
		base: {
			bg: 'grey.50',
		},

		hover: {
			bg: 'grey.200',
		},

		active: {
			bg: 'grey.300',
		},

		disabled: {
			bg: 'grey.400',
			color: 'grey.300',
		},
	}),

	ghost: setButtonVariant({
		hover: {
			bg: 'grey.50',
		},

		active: {
			bg: 'grey.200',
		},

		disabled: {
			bg: 'grey.300',
			color: 'light.100',
		},
	}),
};

export default variants;
