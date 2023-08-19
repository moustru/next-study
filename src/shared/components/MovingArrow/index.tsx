import { motion } from 'framer-motion';

import css from './index.module.css';

export const MovingArrow = ({
	isHoverOnParent,
}: {
	isHoverOnParent: boolean;
}) => {
	return (
		<div className={css.arrow}>
			<motion.div
				className={css.blackmove}
				initial={{ x: '-10%' }}
				animate={{ x: isHoverOnParent ? '100%' : 0 }}
				transition={{ duration: 0.3, cubicBezier: '0.83, 0, 0.17, 1' }}
			/>
		</div>
	);
};
