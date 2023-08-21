import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getArticleData = async (articleId: string): Promise<any> =>
	await httpStrapi
		.get(
			`/blog-article-pages/${articleId}?populate[tags][populate]=*&populate[zoneOfContents][populate]=*&populate[authorAvatar][populate]=*`
		)
		.json();

const config = {
	queryKey: (articleId: string) => [`articlePage-${articleId}`],
};

export const prefetchArticleData = async (
	queryClient: QueryClient,
	articleId: string
) => {
	const { queryKey } = config;

	await queryClient.prefetchQuery({
		queryKey: queryKey(articleId),
		queryFn: () => getArticleData(articleId),
	});
};

export const useArticleData = (articleId: string) => {
	const { queryKey } = config;

	return useQuery({
		queryKey: queryKey(articleId),
		queryFn: () => getArticleData(articleId),
	});
};
