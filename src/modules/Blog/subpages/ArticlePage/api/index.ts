import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getArticleData = async (slug: string): Promise<any> => {
	const params = [
		'populate[tags][populate]=*',
		'populate[zoneOfContents][populate]=*',
		'populate[authorAvatar][populate]=*',
	];

	const paramsStr = params.join('&');

	return await httpStrapi
		.get(`/blog-article-pages?filters[slug]=${slug}&${paramsStr}`)
		.json();
};

const config = {
	queryKey: (slug: string) => [`articlePage-${slug}`],
};

export const prefetchArticleData = async (
	queryClient: QueryClient,
	slug: string
) => {
	const { queryKey } = config;

	await queryClient.prefetchQuery({
		queryKey: queryKey(slug),
		queryFn: () => getArticleData(slug),
	});
};

export const useArticleData = (slug: string) => {
	const { queryKey } = config;

	return useQuery({
		queryKey: queryKey(slug),
		queryFn: () => getArticleData(slug),
	});
};
