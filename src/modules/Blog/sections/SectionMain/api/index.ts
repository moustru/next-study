import { useQuery } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

const loadBlogNews = async (): Promise<any> => {
	return await httpStrapi.get(`/blog-articles?populate=*`).json();
};

export const useArticlesData = () =>
	useQuery({
		queryKey: ['articles'],
		queryFn: loadBlogNews,
	});
