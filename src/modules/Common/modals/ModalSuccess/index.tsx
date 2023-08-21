import { Heading, Text } from '@chakra-ui/react';

import { useModal } from '@/config/providers/Modal.provider';
import { CustomModal } from '@/shared/components/CustomModal';

export const ModalSuccess = () => {
	const { isOpen, closeModal } = useModal();

	return (
		<CustomModal isOpen={isOpen} onClose={closeModal}>
			<CustomModal.Header>
				<Heading variant="h2" as="h2">
					Ура!
				</Heading>
			</CustomModal.Header>

			<CustomModal.Body>
				<Text variant="lg">
					Ваш запрос отправлен. Мы скоро свяжемся с вами :)
				</Text>
			</CustomModal.Body>
		</CustomModal>
	);
};
