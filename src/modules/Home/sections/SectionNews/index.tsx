import { Flex } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { NewsItem } from '@/shared/components/NewsItem';

import { news } from './mocks';

export const SectionNews = () => {
	return (
		<SectionTemplate title="Новости">
			<Flex gap={{ lg: 8, xs: 4 }} wrap={{ lg: 'nowrap', xs: 'wrap' }}>
				{news.map((newsItem, i) => (
					<NewsItem {...newsItem} key={newsItem.title + i} />
				))}
			</Flex>
		</SectionTemplate>
	);
};
