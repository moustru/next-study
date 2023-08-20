import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getServicePageData = async (serviceId: string): Promise<any> => {
	const params = [
		'populate[0]=zoneOfContents',
		'populate[1]=zoneOfContents.achievements.icon',
		'populate[2]=zoneOfContents.steps',
		'populate[3]=zoneOfContents.cases.bgImage',
	];

	const paramsStr = params.join('&');

	return await httpStrapi
		.get(`/service-pages/${serviceId}?${paramsStr}`)
		.json();
};

const config = {
	queryKey: (serviceId: string) => [`servicePage-${serviceId}`],
};

export const prefetchServicePageData = async (
	queryClient: QueryClient,
	serviceId: string
) => {
	const { queryKey } = config;

	await queryClient.prefetchQuery({
		queryKey: queryKey(serviceId),
		queryFn: () => getServicePageData(serviceId),
	});
};

export const useServicePageData = (serviceId: string) => {
	const { queryKey } = config;

	return useQuery({
		queryKey: queryKey(serviceId),
		queryFn: () => getServicePageData(serviceId),
	});
};
