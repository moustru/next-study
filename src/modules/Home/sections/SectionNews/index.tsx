import { Flex } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { NewsItem } from '@/shared/components/NewsItem';

import { news as news2 } from './mocks';

type SectionNewsModel = {
	news?: {
		title: string;
		description: string;
		publisher: string;
		releaseDate: string;
	}[];
};

export const SectionNews = ({ news = [] }: SectionNewsModel) => {
	return (
		<SectionTemplate title="Новости">
			<Flex gap={{ lg: 8, xs: 4 }} wrap={{ lg: 'nowrap', xs: 'wrap' }}>
				{news2.map((newsItem, i) => (
					<NewsItem {...newsItem} key={newsItem.title + i} />
				))}
			</Flex>
		</SectionTemplate>
	);
};
