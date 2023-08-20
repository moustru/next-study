import { Flex } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { NewsItem } from '@/shared/components/NewsItem';

// import { news } from './mocks';

type SectionNewsModel = {
	heading: string;
	news: {
		id: number;
		title: string;
		description: string;
		publisher: string;
		publicationDate: string;
	}[];
};

export const SectionNews = ({ heading, news }: SectionNewsModel) => {
	return (
		<SectionTemplate title={heading}>
			<Flex gap={{ lg: 8, xs: 4 }} wrap={{ lg: 'nowrap', xs: 'wrap' }}>
				{news.map((newsItem) => (
					<NewsItem {...newsItem} key={newsItem.id} />
				))}
			</Flex>
		</SectionTemplate>
	);
};
