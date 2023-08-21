import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { ArticlePage } from '@/modules/Blog/subpages/ArticlePage';
import { prefetchArticleData } from '@/modules/Blog/subpages/ArticlePage/api';

import type { GetServerSideProps } from 'next';

const Article = () => <ArticlePage />;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const queryClient = composeQueryClient();

	await prefetchArticleData(queryClient, query.slug as string);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default Article;
