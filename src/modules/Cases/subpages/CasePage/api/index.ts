import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getCasePageData = async (caseId: string): Promise<any> => {
	const params = [
		'populate[0]=zoneOfContents',
		'populate[1]=zoneOfContents.tags',
		'populate[2]=zoneOfContents.reviews',
		'populate[3]=zoneOfContents.cases.bgImage',
	];

	const paramsStr = params.join('&');

	return await httpStrapi.get(`/case-pages/${caseId}?${paramsStr}`).json();
};

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
