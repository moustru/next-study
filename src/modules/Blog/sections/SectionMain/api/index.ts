import { useQuery } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

const loadBlogNews = async (): Promise<any> => {
	return await httpStrapi.get(`/blog-article-pages?populate=*`).json();
};

export const useArticlesData = () =>
	useQuery({
		queryKey: ['articles'],
		queryFn: loadBlogNews,
	});
