import { Button, Container, Flex } from '@chakra-ui/react';

import { useModal } from '@/modules/Common/providers/Modal.provider';
import { CustomModal } from '@/shared/components/CustomModal';

import { Links } from '../Links';
import { Logo } from '../Logo';

import css from './index.module.css';

export const Header = () => {
	const { onOpen, isOpen, onClose } = useModal();

	return (
		<header className={css.header}>
			<Container paddingBlock={['40px', '40px', '40px', '60px', '60px']}>
				<Flex alignItems="center" justifyContent="space-between">
					<Logo />
					<Flex gap={5}>
						<Links />
						<Button size="md" variant="blue" onClick={onOpen}>
							Написать нам
						</Button>
					</Flex>
				</Flex>
			</Container>
			<CustomModal isOpen={isOpen} onClose={onClose} />
		</header>
	);
};
