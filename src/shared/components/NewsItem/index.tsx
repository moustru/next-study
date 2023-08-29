import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import htmlParser from 'html-react-parser';

type NewsModel = Record<
	'title' | 'description' | 'publisher' | 'publicationDate',
	string
>;

export const NewsItem = ({
	title,
	description,
	publisher,
	publicationDate,
}: NewsModel) => {
	const formattedDate = new Date(publicationDate).toLocaleDateString('ru-RU');

	return (
		<Flex
			w={{ lg: 418, xs: '100%' }}
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
				<Text variant="lg" mb="58px" noOfLines={[1, 2, 3]}>
					{htmlParser(description)}
				</Text>
			</Stack>
			<Text variant="sm" color="grey.500">
				{htmlParser(publisher)}, {htmlParser(formattedDate)}
			</Text>
		</Flex>
	);
};
