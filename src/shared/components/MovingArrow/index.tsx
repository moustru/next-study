import { motion } from 'framer-motion';

import css from './index.module.css';

export const MovingArrow = ({
	isHoverOnParent,
	isDark = false,
}: {
	isHoverOnParent: boolean;
	isDark?: boolean;
}) => {
	const coloring = isDark ? 'light' : 'dark';
	return (
		<div data-color={coloring} className={css.movingWay}>
			<motion.div
				className={css.arrow}
				data-color={coloring}
				initial={{ x: '-10%' }}
				animate={{ x: isHoverOnParent ? '100%' : '5%' }}
				transition={{ duration: 0.3, cubicBezier: '0.83, 0, 0.17, 1' }}
			/>
		</div>
	);
};
