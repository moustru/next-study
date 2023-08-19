import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getServicePageData = async (serviceId: string): Promise<any> =>
	await httpStrapi
		.get(`/service-pages/${serviceId}?populate[zoneOfContents][populate]=*`)
		.json();

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
