import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getServicePageData = async (slug: string): Promise<any> => {
	const params = [
		'populate[0]=zoneOfContents',
		'populate[1]=zoneOfContents.achievements.icon',
		'populate[2]=zoneOfContents.steps',
		'populate[3]=zoneOfContents.cases.bgImage',
	];

	const paramsStr = params.join('&');

	return await httpStrapi
		.get(`/service-pages?filters[cardOptions][slug]=${slug}&${paramsStr}`)
		.json();
};

const config = {
	queryKey: (slug: string) => [`servicePage-${slug}`],
};

export const prefetchServicePageData = async (
	queryClient: QueryClient,
	slug: string
) => {
	const { queryKey } = config;

	await queryClient.prefetchQuery({
		queryKey: queryKey(slug),
		queryFn: () => getServicePageData(slug),
	});
};

export const useServicePageData = (slug: string) => {
	const { queryKey } = config;

	return useQuery({
		queryKey: queryKey(slug),
		queryFn: () => getServicePageData(slug),
	});
};
