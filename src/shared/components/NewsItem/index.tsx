import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

type NewsModel = Record<
	'title' | 'description' | 'publisher' | 'releaseDate',
	string
>;

export const NewsItem = ({
	title,
	description,
	publisher,
	releaseDate,
}: NewsModel) => {
	// const formattedDate = new Date(releaseDate).toLocaleDateString();

	return (
		<Flex
			w={{ lg: 418, xs: '100%' }}
			h={{ lg: 288, xs: 220 }}
			direction="column"
			justify="space-between"
			bgColor="grey.50"
			borderRadius={{ md: 32, xs: 20 }}
			px="32px"
			py="24px"
		>
			<Stack gap={0}>
				<Heading as="h3" variant="h3" mb={4}>
					{title}
				</Heading>
				<Text variant="lg">{description}</Text>
			</Stack>
			<Text variant="sm" color="grey.500">
				{publisher}, 10.03.2023
			</Text>
		</Flex>
	);
};
