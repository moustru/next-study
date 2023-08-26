import { Container, Heading } from '@chakra-ui/react';

import { SectionFormContent } from './ui/SectionFormContent';

export const SectionForm = () => {
	return (
		<Container as="section" mb={{ lg: '120px', sm: '100px', xs: '60px' }}>
			<Heading as="h2" variant="h2" mb={{ lg: 20, sm: 12, xs: 8 }}>
				Оставьте вашу заявку
			</Heading>
			<SectionFormContent />
		</Container>
	);
};
