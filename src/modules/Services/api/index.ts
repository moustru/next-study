import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getServicesData = async (): Promise<any> =>
	await httpStrapi
		.get('/services?populate[0]=services&populate[1]=services.tags')
		.json();

const config = {
	queryKey: ['services'],
	queryFn: () => getServicesData(),
};

export const prefetchServicesData = async (queryClient: QueryClient) =>
	await queryClient.prefetchQuery(config);

export const useServicesData = () => useQuery(config);
