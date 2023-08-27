import { Container, Heading, Text } from '@chakra-ui/react';
import htmlParser from 'html-react-parser';

type SectionMainModel = Record<'title' | 'subtitle', string>;

export const SectionMain = ({ title, subtitle }: SectionMainModel) => {
	return (
		<Container
			mt={{ md: 200, xs: 120 }}
			mb={{ lg: 180, md: '80px', xs: '40px' }}
		>
			<Heading as="h1" variant="h1" mb={{ lg: '80px', md: '60px', xs: 8 }}>
				{htmlParser(title)}
			</Heading>
			<Text variant="xl" maxW={{ lg: 900, xs: 'auto' }}>
				{htmlParser(subtitle)}
			</Text>
		</Container>
	);
};
