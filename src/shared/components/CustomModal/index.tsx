/* eslint-disable react-hooks/rules-of-hooks */
import {
	Drawer,
	DrawerContent,
	DrawerOverlay,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	DrawerCloseButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useMediaQuery,
	Flex,
} from '@chakra-ui/react';
import { ReactElement, useEffect } from 'react';

import useLockedBody from '@/shared/hooks/useLockedBody';

type CustomModalProps = CustomModalCompound & {
	isOpen: boolean;
	onClose: () => void;
};

type CustomModalCompound = {
	children?: ReactElement | ReactElement[];
};

const CustomModal = ({ isOpen, onClose, children }: CustomModalProps) => {
	const [largerThan1024] = useMediaQuery('(min-width: 1024px)');

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

	return largerThan1024 ? (
		<Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
			<ModalOverlay sx={{ backdropFilter: 'blur(3px)' }} bg="transparent" />
			<ModalContent
				w="90%"
				maxW="1320px"
				px={{ lg: '60px', xs: '24px' }}
				py={{ lg: '56px', xs: '24px' }}
				sx={{ borderRadius: '40px' }}
			>
				{children}
			</ModalContent>
		</Modal>
	) : (
		<Drawer
			isOpen={isOpen}
			onClose={onClose}
			placement="bottom"
			blockScrollOnMount={false}
		>
			<DrawerOverlay />
			<DrawerContent height="90%" p={{ lg: '60px', xs: '24px' }}>
				{children}
			</DrawerContent>
		</Drawer>
	);
};

CustomModal.Header = ({ children }: CustomModalCompound) => {
	const [largerThan1024] = useMediaQuery('(min-width: 1024px)');

	return largerThan1024 ? (
		<Flex justify="space-between" mb={16}>
			<ModalHeader style={{ flex: 'auto', padding: 0 }}>{children}</ModalHeader>
			<ModalCloseButton
				size="xl"
				style={{ position: 'static', fontSize: '24px', padding: '15px' }}
			/>
		</Flex>
	) : (
		<>
			<DrawerHeader>{children}</DrawerHeader>
			<DrawerCloseButton size="xl" p="32px" />
		</>
	);
};

CustomModal.Body = ({ children }: CustomModalCompound) => {
	const [largerThan1024] = useMediaQuery('(min-width: 1024px)');

	return largerThan1024 ? (
		<ModalBody p={0}>{children}</ModalBody>
	) : (
		<DrawerBody w="100%">{children}</DrawerBody>
	);
};

CustomModal.Footer = ({ children }: CustomModalCompound) => {
	const [largerThan1024] = useMediaQuery('(min-width: 1024px)');

	return largerThan1024 ? (
		<ModalFooter>{children}</ModalFooter>
	) : (
		<DrawerFooter>{children}</DrawerFooter>
	);
};

export { CustomModal };
