import { AnimatePresence, motion } from 'framer-motion';

import { maskAnimation } from '../../burger.constants';

import css from './index.module.css';

interface OverlayProps {
	isOpen: boolean;
	onClick: () => void;
}

export const Overlay = ({ isOpen, onClick }: OverlayProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className={css.mask}
					variants={maskAnimation}
					onClick={onClick}
				/>
			)}
		</AnimatePresence>
	);
};
