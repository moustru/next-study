import { Grid, Heading } from '@chakra-ui/react';
import { type PropsWithChildren } from 'react';

import { useModal } from '@/modules/Common/providers/Modal.provider';
import { SectionFormContent } from '@/modules/Common/sections/SectionForm';
import { CustomModal } from '@/shared/components/CustomModal';

import { Footer } from './ui/Footer';
import { Header } from './ui/Header';

export function AppLayout({ children }: PropsWithChildren) {
	const { isOpen, onClose } = useModal();

	return (
		<Grid minH="100vh" gridTemplateRows="auto 1fr auto">
			<Header />
			<main>{children}</main>
			<Footer />

			<CustomModal isOpen={isOpen} onClose={onClose}>
				<CustomModal.Header>
					<Heading variant="h2" as="h2">
						Оставьте вашу заявку
					</Heading>
				</CustomModal.Header>

				<CustomModal.Body>
					<SectionFormContent />
				</CustomModal.Body>
			</CustomModal>
		</Grid>
	);
}
