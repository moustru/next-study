import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getCasePageData = async (caseId: string): Promise<any> =>
	await httpStrapi.get(`/case-pages/${caseId}?populate=*`).json();

const config = {
	queryKey: (caseId: string) => [`casePage-${caseId}`],
};

export const prefetchCasePageData = async (
	queryClient: QueryClient,
	caseId: string
) => {
	const { queryKey } = config;

	await queryClient.prefetchQuery({
		queryKey: queryKey(caseId),
		queryFn: () => getCasePageData(caseId),
	});
};

export const useCasePageData = (caseId: string) => {
	const { queryKey } = config;

	return useQuery({
		queryKey: queryKey(caseId),
		queryFn: () => getCasePageData(caseId),
	});
};
