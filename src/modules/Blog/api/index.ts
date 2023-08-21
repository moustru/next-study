import { type QueryClient, useQuery } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

const loadBlogNews = async (): Promise<any> => {
	return await httpStrapi.get(`/blog-article-pages?populate=*`).json();
};

const config = {
	queryKey: ['articles'],
	queryFn: loadBlogNews,
};

export const prefetchAllArticlesData = async (queryClient: QueryClient) => {
	await queryClient.prefetchQuery(config);
};

export const useAllArticlesData = () => useQuery(config);
