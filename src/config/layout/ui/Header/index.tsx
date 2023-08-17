import {
	Button,
	Container,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Flex,
	IconButton,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react';

import { useModal } from '@/modules/Common/providers/Modal.provider';

import { Links } from '../Links';
import { Logo } from '../Logo';

import css from './index.module.css';

import CloseSVG from 'public/icons/close.svg';
import BurgerSVG from 'public/icons/menu.svg';

export const Header = () => {
	const { onOpen } = useModal();
	const {
		isOpen: isMenuOpen,
		onOpen: openMenu,
		onClose: closeMenu,
	} = useDisclosure();

	const [largetThan768] = useMediaQuery('(min-width: 768px)');

	const MenuIcon = isMenuOpen ? CloseSVG : BurgerSVG;

	const toggleMobileMenu = () => {
		openMenu();
	};

	return (
		<header className={css.header}>
			<Container paddingBlock={['40px', '40px', '40px', '60px', '60px']}>
				<Flex alignItems="center" justifyContent="space-between">
					<Logo />

					{largetThan768 ? (
						<Flex gap={5} align="center">
							<Links />
							<Button size="md" variant="blue" onClick={onOpen}>
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

			<Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="top">
				<DrawerOverlay />
				<DrawerContent px="32px" py="40px" gap={8}>
					<Links closeMenu={closeMenu} />
					<Button size="md" variant="blue" onClick={onOpen}>
						Написать нам
					</Button>
				</DrawerContent>
			</Drawer>
		</header>
	);
};
