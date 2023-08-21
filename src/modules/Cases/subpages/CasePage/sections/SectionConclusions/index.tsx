import { Container, Heading, Text } from '@chakra-ui/react';

type SectionConclusionsModel = {
	heading: string;
	describe: string;
};

export const SectionConclusions = ({
	heading,
	describe,
}: SectionConclusionsModel) => {
	return (
		<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
			<Heading as="h2" variant="h2" mb={{ lg: 16, md: 8, xs: 4 }}>
				{heading}
			</Heading>
			<Text variant="xl">{describe}</Text>
		</Container>
	);
};
