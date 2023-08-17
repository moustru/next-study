import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

import { Logo } from '../Logo';

import { MenuToggle } from './components/MenuToggle';
import useLockedBody, { useDimensions } from './hooks';
import css from './index.module.css';

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(0px at 259px 65px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const HeaderMobile = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	const [locked, setLocked] = useLockedBody(false, 'root');

	const disableScroll = () => {
		setLocked(!locked);
	};

	useEffect(() => {
		if (isOpen) {
			disableScroll();
		}

		return () => {
			setLocked(locked);
		};
	}, [isOpen]);

	return (
		<div className={(css.Root, isOpen ? css.isOpen : '')}>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={css.mask}
						onClick={() => {
							toggleOpen();
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.8 }}
						exit={{ opacity: 0 }}
					/>
				)}
			</AnimatePresence>
			<motion.nav
				className={css.Modal}
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				custom={height}
				ref={containerRef}
			>
				<motion.div className={css.menu} variants={sidebar} />
				{isOpen && (
					<AnimatePresence>
						<motion.div
							transition={{ duration: 1.2 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, position: 'absolute' }}
							exit={{ opacity: 0 }}
						>
							<div>rfwrfweferw</div>
							<div>rfwrfweferw</div>
							<div>rfwrfweferw</div>
						</motion.div>
					</AnimatePresence>
				)}
				<MenuToggle
					toggle={() => {
						toggleOpen();
					}}
				/>
			</motion.nav>
			<Logo />
		</div>
	);
};
