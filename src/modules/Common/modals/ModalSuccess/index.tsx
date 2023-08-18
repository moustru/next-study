import { Heading } from '@chakra-ui/react';

import { useModal } from '@/config/providers/Modal.provider';
import { CustomModal } from '@/shared/components/CustomModal';

import { SectionFormContent } from '../../sections/SectionForm';

export const ModalSuccess = () => {
	const { isOpen, closeModal } = useModal();

	return (
		<CustomModal isOpen={isOpen} onClose={closeModal}>
			<CustomModal.Header>
				<Heading variant="h2" as="h2">
					Успешно!
				</Heading>
			</CustomModal.Header>

			<CustomModal.Body>
				<Heading>Охуенно</Heading>
			</CustomModal.Body>
		</CustomModal>
	);
};
