import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getCasesData = async (params = ''): Promise<any> => {
	const pagination = params ?? '';

	return await httpStrapi
		.get(`/case-pages?populate[0]=cardOptions.bgImage${pagination}`)
		.json();
};

const config = {
	queryKey: ['cases'],
	queryFn: () => getCasesData(),
};

export const prefetchCasesData = async (queryClient: QueryClient) =>
	await queryClient.prefetchQuery(config);

export const prefetchPaginatedCasesData = async (
	queryClient: QueryClient,
	params: string
) =>
	await queryClient.prefetchQuery({
		queryKey: [`cases-${params}`],
		queryFn: () => getCasesData(params),
	});

export const useCasesData = () => useQuery(config);
export const usePaginatedCasesData = (params: string) =>
	useQuery({
		queryKey: [`cases-${params}`],
		queryFn: () => getCasesData(params),
	});
