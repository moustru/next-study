import { Container, Heading, Text } from '@chakra-ui/react';

type SectionMainModel = Record<'title' | 'subtitle', string>;

export const SectionMain = ({ title, subtitle }: SectionMainModel) => {
	return (
		<Container
			mt={{ md: 200, xs: 120 }}
			mb={{ lg: 180, md: '80px', xs: '40px' }}
		>
			<Heading as="h1" variant="h1" mb={{ lg: 12, md: 8, xs: 4 }}>
				{title}
			</Heading>
			<Text variant="xl" maxW={{ lg: 900, xs: 'auto' }}>
				{subtitle}
			</Text>
		</Container>
	);
};
