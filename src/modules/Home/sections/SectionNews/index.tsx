import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { Box, Text, Heading, Flex, Stack } from '@chakra-ui/react';

type NewsModel = Record<'title' | 'text' | 'publisher' | 'date', string>;

const news = [
	{
		title: 'Новое приложение',
		text: 'Ученые из Петербурга создают приложение для обучения детей чтению',
		publisher: 'Редакция первого канала',
		date: '23.05.23',
	},
	{
		title: 'Обучение детей',
		text: 'Студенты предложили научить детей читать с помощью мобильного приложения',
		publisher: 'СПбГЭТУ «ЛЭТИ»',
		date: '14.06.23',
	},
	{
		title: 'Новые технологии',
		text: 'Разработка ученых ЛЭТИ в помощь ритейлерам и покупателям',
		publisher: 'Комсомольская правда',
		date: '02.07.23',
	},
];

const NewsItem = ({ title, text, publisher, date }: NewsModel) => {
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

export const SectionNews = () => {
	return (
		<SectionTemplate title="Новости">
			<Flex gap={8}>
				{news.map((newsItem, i) => (
					<NewsItem {...newsItem} key={newsItem.title + i} />
				))}
			</Flex>
		</SectionTemplate>
	);
};
