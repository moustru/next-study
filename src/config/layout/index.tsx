import { Grid, Heading, useMediaQuery } from '@chakra-ui/react';
import { type PropsWithChildren } from 'react';

import { useModal } from '@/modules/Common/providers/Modal.provider';
import { SectionFormContent } from '@/modules/Common/sections/SectionForm';
import { CustomModal } from '@/shared/components/CustomModal';

import { HeaderMobile } from './ui/Burger';
import { Footer } from './ui/Footer';
import { Header } from './ui/Header';

export function AppLayout({ children }: PropsWithChildren) {
	const { isOpen, onClose } = useModal();
	const [largerThan768] = useMediaQuery('(min-width: 768px)');

	return (
		<Grid minH="100vh" gridTemplateRows="auto 1fr auto">
			{largerThan768 ? <Header /> : <HeaderMobile />}

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
