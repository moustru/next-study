import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getHomeData = async (): Promise<any> => {
	const params = [
		'populate[0]=zoneOfContents',
		'populate[1]=zoneOfContents.partnersLogos',
		'populate[2]=zoneOfContents.achievements.icon',
		'populate[3]=zoneOfContents.steps',
		'populate[4]=zoneOfContents.cases.bgImage',
		'populate[5]=zoneOfContents.news',
		'populate[6]=zoneOfContents.reviews.avatar',
	];

	const paramsStr = params.join('&');

	return await httpStrapi.get(`/homes?${paramsStr}`).json();
};

const config = {
	queryKey: ['home'],
	queryFn: () => getHomeData(),
};

export const prefetchHomeData = async (queryClient: QueryClient) =>
	await queryClient.prefetchQuery(config);

export const useHomeData = () => useQuery(config);
