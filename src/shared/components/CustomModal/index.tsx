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
} from '@chakra-ui/react';
import { ReactElement } from 'react';

type CustomModalProps = CustomModalCompound & {
	isOpen: boolean;
	onClose: () => void;
};

type CustomModalCompound = {
	children?: ReactElement | ReactElement[];
};

const CustomModal = ({ isOpen, onClose, children }: CustomModalProps) => {
	const [largerThan1024] = useMediaQuery('(min-width: 1024px)');

	return largerThan1024 ? (
		<Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
			<ModalOverlay sx={{ backdropFilter: 'blur(5px)' }} bg="blackAlpha.500" />
			<ModalContent w="83.3333%" maxW="1320px" p={{ lg: '60px', xs: '24px' }}>
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
			<DrawerContent p={{ lg: '60px', xs: '24px' }}>{children}</DrawerContent>
		</Drawer>
	);
};

CustomModal.Header = ({ children }: CustomModalCompound) => {
	const [largerThan1024] = useMediaQuery('(min-width: 1024px)');

	return largerThan1024 ? (
		<>
			<ModalHeader>{children}</ModalHeader>
			<ModalCloseButton size="xl" p="32px" />
		</>
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
		<ModalBody>{children}</ModalBody>
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
