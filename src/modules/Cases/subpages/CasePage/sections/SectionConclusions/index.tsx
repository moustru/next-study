import { Container, Heading, Text } from '@chakra-ui/react';

export const SectionConclusions = () => {
	return (
		<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
			<Heading as="h2" variant="h2" mb={{ lg: 16, md: 8, xs: 4 }}>
				Выводы
			</Heading>
			<Text variant="xl">
				С помощью современных технологий разработали дизайн и спроектировали
				мобильное приложение за 4 месяца
			</Text>
		</Container>
	);
};
