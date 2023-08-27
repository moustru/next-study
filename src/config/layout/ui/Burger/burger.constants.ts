import { Variant, Variants } from 'framer-motion';

export const sidebarAnimationVariants = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			duration: 0.1,
			delay: 0.1,

			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(0px at 259px 65px)',
		transition: {
			delay: 0.1,
			duration: 0.1,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const maskAnimation: Variants = {
	initial: { opacity: 0 },
	animate: { opacity: 0.8 },
	exit: { opacity: 0 },
	duration: 0.1 as Variant,
};

export const menuAnimation = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	duration: 0.1,
};
