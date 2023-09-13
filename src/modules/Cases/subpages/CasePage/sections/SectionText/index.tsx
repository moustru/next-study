import { Container } from '@chakra-ui/react';

import { TextComponent } from '@/shared/components/TextComponent';

type SectionTextModel = {
	text: string;
};

export const SectionText = ({ text }: SectionTextModel) => {
	return (
		<Container mb={{ lg: '80px', md: '60px', xs: '40px' }}>
			<TextComponent text={text} variant="xl" mb={{ lg: 20, md: 10, xs: 8 }} />
		</Container>
	);
};
