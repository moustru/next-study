import { dehydrate } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';
import { composeQueryClient } from '@/config/api/queryClient';
import { ArticlePage } from '@/modules/Blog/subpages/ArticlePage';
import { prefetchArticleData } from '@/modules/Blog/subpages/ArticlePage/api';

import type { GetStaticProps } from 'next';

const Article = () => <ArticlePage />;

export async function getStaticPaths() {
	let articles = (await httpStrapi.get('/blog-article-pages').json()) as any;

	const paths = articles.data.map((article: any) => ({
		params: { articleId: article.id.toString() },
	}));

	return {
		paths,
		fallback: true,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const queryClient = composeQueryClient();

	await prefetchArticleData(queryClient, params?.articleId as string);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
		revalidate: 1,
	};
};

export default Article;
