import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

type NewsModel = Record<'title' | 'text' | 'publisher' | 'date', string>;

export const NewsItem = ({ title, text, publisher, date }: NewsModel) => {
	return (
		<Flex
			w={418}
			h={288}
			direction="column"
			justify="space-between"
			bgColor="grey.50"
			borderRadius={32}
			px="32px"
			py="24px"
		>
			<Stack gap={0}>
				<Heading as="h3" variant="h3" mb={4}>
					{title}
				</Heading>
				<Text variant="lg">{text}</Text>
			</Stack>
			<Text variant="sm" color="grey.500">
				{publisher}, {date}
			</Text>
		</Flex>
	);
};
