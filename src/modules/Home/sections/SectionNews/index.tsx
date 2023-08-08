import { Flex } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { NewsItem } from '@/shared/components/NewsItem';

import { news } from './mocks/SectionNews.mocks';

export const SectionNews = () => {
	return (
		<SectionTemplate title="Новости">
			<Flex gap={{ base: 8, md: 4 }} wrap={{ base: 'nowrap', md: 'wrap' }}>
				{news.map((newsItem, i) => (
					<NewsItem {...newsItem} key={newsItem.title + i} />
				))}
			</Flex>
		</SectionTemplate>
	);
};
