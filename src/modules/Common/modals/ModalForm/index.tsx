import { Heading } from '@chakra-ui/react';

import { useModal } from '@/config/providers/Modal.provider';
import { CustomModal } from '@/shared/components/CustomModal';

import { SectionFormContent } from '../../sections/SectionForm';

export const ModalForm = () => {
	const { isOpen, closeModal } = useModal();

	return (
		<CustomModal isOpen={isOpen} onClose={closeModal}>
			<CustomModal.Header>
				<Heading variant="h2" as="h2">
					Оставьте вашу заявку
				</Heading>
			</CustomModal.Header>

			<CustomModal.Body>
				<SectionFormContent />
			</CustomModal.Body>
		</CustomModal>
	);
};
