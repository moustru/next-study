import { Container, Text } from '@chakra-ui/react';

type SectionTextModel = {
	text: string;
};

export const SectionText = ({ text }: SectionTextModel) => {
	return (
		<Container mb={{ lg: '80px', md: '60px', xs: '40px' }}>
			<Text variant="xl" mb={{ lg: 20, md: 10, xs: 8 }}>
				{text}
			</Text>
		</Container>
	);
};
