import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getCasePageData = async (slug: string): Promise<any> => {
	const params = [
		'populate[0]=zoneOfContents',
		'populate[1]=zoneOfContents.tags',
		'populate[2]=zoneOfContents.reviews.avatar',
		'populate[4]=zoneOfContents.images',
		'populate[5]=zoneOfContents.cases.bgImage',
	];

	const paramsStr = params.join('&');

	return await httpStrapi
		.get(`/case-pages?filters[slug]=${slug}&${paramsStr}`)
		.json();
};

const config = {
	queryKey: (slug: string) => [`casePage-${slug}`],
};

export const prefetchCasePageData = async (
	queryClient: QueryClient,
	slug: string
) => {
	const { queryKey } = config;

	await queryClient.prefetchQuery({
		queryKey: queryKey(slug),
		queryFn: () => getCasePageData(slug),
	});
};

export const useCasePageData = (slug: string) => {
	const { queryKey } = config;

	return useQuery({
		queryKey: queryKey(slug),
		queryFn: () => getCasePageData(slug),
	});
};
