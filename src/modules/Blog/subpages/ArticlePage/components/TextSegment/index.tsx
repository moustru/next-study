import { Container, Text } from '@chakra-ui/react';

type TextSegmentModel = {
	text: string;
};

export const TextSegment = ({ text }: TextSegmentModel) => {
	return (
		<Container mb={{ lg: '80px', md: '48px', xs: '32px' }}>
			<Text variant="xl">{text}</Text>
		</Container>
	);
};
