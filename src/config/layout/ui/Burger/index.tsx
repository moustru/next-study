import { Button } from '@chakra-ui/react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

import { useModal } from '@/config/providers/Modal.provider';
import { ModalForm } from '@/modules/Common/modals';
import { useDimensions } from '@/shared/hooks/useDimensions';
import useLockedBody from '@/shared/hooks/useLockedBody';

import { LangVersion } from '../LangVersion';
import { Links } from '../Links';
import { Logo } from '../Logo';

import { sidebarAnimationVariants } from './burger.constants';
import { MenuToggle } from './components/MenuToggle';
import { Overlay } from './components/Overlay';
import css from './index.module.css';

export const HeaderMobile = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	const [locked, setLocked] = useLockedBody(false, 'root');

	const toggleOpenHandler = () => toggleOpen();

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

	const { openModal } = useModal();

	const modalHandler = () => openModal(<ModalForm />);

	return (
		<motion.header
			data-open={isOpen}
			className={css.burger}
			initial={{ height: '20%' }}
			animate={{
				height: isOpen ? '100%' : '20%',
				transition: { delay: isOpen ? 0 : 0.5 },
			}}
			exit={{ height: '20%' }}
		>
			<Overlay isOpen={isOpen} onClick={toggleOpenHandler} />
			<motion.nav
				className={css.modal}
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				custom={height}
				ref={containerRef}
			>
				<motion.div className={css.menu} variants={sidebarAnimationVariants} />
				<AnimatePresence>
					{isOpen && (
						<motion.div
							transition={{ duration: 0.1 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, position: 'absolute', top: '30px' }}
							exit={{ opacity: 0 }}
						>
							<Links closeMenu={toggleOpenHandler} />
							<Button mt={5} size="xs" variant="blue" onClick={modalHandler}>
								Написать нам
							</Button>
							<LangVersion />
						</motion.div>
					)}
				</AnimatePresence>
				<MenuToggle toggle={toggleOpenHandler} />
			</motion.nav>
			<Logo location="header" />
		</motion.header>
	);
};
