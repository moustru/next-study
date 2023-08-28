import { Container, Text } from '@chakra-ui/react';

type TextSegmentModel = {
	text: string;
};

export const TextSegment = ({ text }: TextSegmentModel) => {
	return (
		<Container mb={{ lg: '180px', md: '90px', xs: '32px' }}>
			<Text maxW="869px" variant="xl">
				{text}
			</Text>
		</Container>
	);
};
