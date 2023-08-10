import { Container, Flex, Heading, Tag, Text } from '@chakra-ui/react';

import { tags } from './mocks';

export const SectionMain = () => {
	return (
		<Container
			mt={{ md: 200, xs: 120 }}
			mb={{ lg: 180, sm: '80px', xs: '40px' }}
		>
			<Heading as="h1" variant="h1" mb={{ lg: 10, xs: 6 }}>
				Ботанический сад
			</Heading>
			<Text variant="lg" mb={{ lg: 12, xs: 6 }}>
				Мобильное приложение для ботанического сада Петра Великого
			</Text>
			<Flex gap={{ md: 4, xs: 2 }}>
				{tags.map((tag, i) => (
					<Tag variant="default" key={tag + i}>
						{tag}
					</Tag>
				))}
			</Flex>
		</Container>
	);
};
