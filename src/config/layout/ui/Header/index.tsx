import { Button, Container, Flex } from '@chakra-ui/react';

import { useModal } from '@/config/providers/Modal.provider';
import { ModalForm } from '@/modules/Common/modals';

import { Links } from '../Links';
import { Logo } from '../Logo';

import css from './index.module.css';

export const Header = () => {
	const { openModal } = useModal();

	const modalHandler = () => openModal(<ModalForm />);

	return (
		<header className={css.header}>
			<Container paddingBlock={['40px', '40px', '40px', '60px', '60px']}>
				<Flex alignItems="center" justifyContent="space-between">
					<Logo />

					<Flex gap={7} align="center">
						<Links />
						<Button size="md" variant="blue" onClick={modalHandler}>
							Написать нам
						</Button>
					</Flex>
				</Flex>
			</Container>
		</header>
	);
};
