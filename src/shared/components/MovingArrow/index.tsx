import { useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ArrowSVG from 'public/icons/arrowr.svg';

import css from './index.module.css';

export const MovingArrow = ({
	isHoverOnParent,
	isDark = false,
}: {
	isHoverOnParent: boolean;
	isDark?: boolean;
}) => {
	const coloring = isDark ? 'light' : 'dark';

	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: true,
	});
	return (
		<div data-color={coloring} className={css.movingWay}>
			<motion.div
				className={css.arrowWrapper}
				initial={{ x: '-10%' }}
				animate={{ x: !isMobile && isHoverOnParent ? '90%' : '5%' }}
				transition={{ duration: 0.3, cubicBezier: '0.83, 0, 0.17, 1' }}
			>
				<ArrowSVG data-color={coloring} className={css.arrow} />
			</motion.div>
		</div>
	);
};
