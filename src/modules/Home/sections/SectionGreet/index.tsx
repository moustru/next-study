import { Container, Heading, Text } from '@chakra-ui/react';
import htmlParser from 'html-react-parser';

type SectionGreetModel = {
	subheading: string;
};

export const SectionGreet = ({ subheading }: SectionGreetModel) => {
	return (
		<Container
			as="section"
			pt={{ md: 176, xs: '120px' }}
			pb={{ lg: 180, sm: 100, xs: '40px' }}
		>
			<Heading as="h1" variant="h1" mb={{ lg: 12, md: 8, xs: 4 }} maxW="900px">
				Первая IT-лаборатория&nbsp;
				<Text color="basic.200" display="inline-block">
					коммерческой&nbsp;
				</Text>
				разработки
			</Heading>
			<Text variant={{ md: 'xl', xs: 'md' }} maxW="900px">
				{htmlParser(subheading)}
			</Text>
		</Container>
	);
};
