import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getCasesData = async (): Promise<any> =>
	await httpStrapi.get('/cases?populate=*').json();

const config = {
	queryKey: ['cases'],
	queryFn: () => getCasesData(),
};

export const prefetchCasesData = async (queryClient: QueryClient) =>
	await queryClient.prefetchQuery(config);

export const useCasesData = () => useQuery(config);
