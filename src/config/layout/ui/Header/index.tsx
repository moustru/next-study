import { Button, Container, Flex, useDisclosure } from '@chakra-ui/react';

import { useModal } from '@/modules/Common/providers/Modal.provider';

import { Links } from '../Links';
import { Logo } from '../Logo';

import css from './index.module.css';

export const Header = () => {
	const { onOpen } = useModal();
	const {
		isOpen: isMenuOpen,
		onOpen: openMenu,
		onClose: closeMenu,
	} = useDisclosure();

	return (
		<header className={css.header}>
			<Container paddingBlock={['40px', '40px', '40px', '60px', '60px']}>
				<Flex alignItems="center" justifyContent="space-between">
					<Logo />

					<Flex gap={5} align="center">
						<Links />
						<Button size="md" variant="blue" onClick={onOpen}>
							Написать нам
						</Button>
					</Flex>
				</Flex>
			</Container>
		</header>
	);
};
