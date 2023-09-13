import { Container } from '@chakra-ui/react';

import { TextComponent } from '@/shared/components/TextComponent';

type TextSegmentModel = {
	text: string;
};

export const TextSegment = ({ text }: TextSegmentModel) => {
	return (
		<Container mb={{ lg: '180px', md: '90px', xs: '32px' }}>
			<TextComponent text={text} maxW="869px" variant="xl" />
		</Container>
	);
};
