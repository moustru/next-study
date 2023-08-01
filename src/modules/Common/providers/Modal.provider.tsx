import { useDisclosure } from '@chakra-ui/react';
import { ReactElement, useContext, createContext, useMemo } from 'react';

type ModalContextModel = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

type ModalProviderModel = {
	children: ReactElement;
};

const ModalContext = createContext<ModalContextModel | null>(null);

export const ModalProvider = ({ children }: ModalProviderModel) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const ModalDataMemo = useMemo(() => ({ isOpen, onOpen, onClose }), [isOpen]);

	return (
		<ModalContext.Provider value={ModalDataMemo}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const state = useContext(ModalContext);

	if (!state) throw new Error('useModal must be used within a ModalProvider');

	return state;
};
