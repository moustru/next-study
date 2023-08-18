import {
	Button,
	Container,
	Flex,
	IconButton,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react';

import { useModal } from '@/config/providers/Modal.provider';
import { ModalForm, ModalSuccess } from '@/modules/Common/modals';
import { CustomModal } from '@/shared/components/CustomModal';

import { Links } from '../Links';
import { Logo } from '../Logo';

import css from './index.module.css';

import CloseSVG from 'public/icons/close.svg';
import BurgerSVG from 'public/icons/menu.svg';

export const Header = () => {
	const { isOpen, openModal, closeModal } = useModal();
	const {
		isOpen: isMenuOpen,
		onOpen: openMenu,
		onClose: closeMenu,
	} = useDisclosure();

	const [largerThan768] = useMediaQuery('(min-width: 768px)');

	const MenuIcon = isMenuOpen ? CloseSVG : BurgerSVG;

	const toggleMobileMenu = () => {
		openMenu();
	};

	return (
		<header className={css.header}>
			<Container paddingBlock={['40px', '40px', '40px', '60px', '60px']}>
				<Flex alignItems="center" justifyContent="space-between">
					<Logo />

					{largerThan768 ? (
						<Flex gap={5} align="center">
							<Links />
							<Button
								size="md"
								variant="blue"
								onClick={() => openModal(<ModalForm />)}
							>
								Написать нам
							</Button>
						</Flex>
					) : (
						<IconButton
							variant="ghost"
							aria-label="Open menu"
							onClick={toggleMobileMenu}
						>
							<MenuIcon />
						</IconButton>
					)}
				</Flex>
			</Container>
			{/* <CustomModal isOpen={isOpen} onClose={onClose} /> */}
		</header>
	);
};
