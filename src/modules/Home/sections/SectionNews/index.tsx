import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { Flex } from '@chakra-ui/react';
import { news } from './mocks/SectionNews.mocks';
import { NewsItem } from '@/shared/components/NewsItem';

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
