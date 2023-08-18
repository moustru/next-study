import { useDisclosure } from '@chakra-ui/react';
import {
	ReactElement,
	useContext,
	createContext,
	useMemo,
	useState,
} from 'react';

type ModalContextModel = {
	isOpen: boolean;
	openModal: (component: ReactElement) => void;
	closeModal: () => void;
};

type ModalProviderModel = {
	children: ReactElement;
};

const ModalContext = createContext<ModalContextModel | null>(null);

export const ModalProvider = ({ children }: ModalProviderModel) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [modalComponent, setModalComponent] = useState<ReactElement | null>(
		null
	);

	const openModal = (component: ReactElement) => {
		setModalComponent(component);
		onOpen();
	};

	const closeModal = () => {
		onClose();
		// setModalComponent(null);

		// setTimeout(() => setModalComponent(null), 500);
	};

	const ModalDataMemo = useMemo(
		() => ({ isOpen, openModal, closeModal }),
		[isOpen]
	);

	return (
		<ModalContext.Provider value={ModalDataMemo}>
			{children}

			{modalComponent}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const state = useContext(ModalContext);

	if (!state) throw new Error('useModal must be used within a ModalProvider');

	return state;
};
