import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import styles from './index.module.css';

type CustomModalProps = CustomModalCompound & {
	isOpen: boolean;
	onClose: () => void;
};

type CustomModalCompound = {
	children?: ReactElement;
};

const CustomModal = ({ isOpen, onClose, children }: CustomModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay bg="blackAlpha.700" />
			<ModalContent>{children}</ModalContent>
		</Modal>
	);
};

CustomModal.Header = ({ children }: CustomModalCompound) => {
	return (
		<>
			<ModalHeader>{children}</ModalHeader>
			<ModalCloseButton />
		</>
	);
};

CustomModal.Body = ({ children }: CustomModalCompound) => {
	return <ModalBody>{children}</ModalBody>;
};

CustomModal.Footer = ({ children }: CustomModalCompound) => {
	return <ModalFooter>{children}</ModalFooter>;
};

export { CustomModal };
