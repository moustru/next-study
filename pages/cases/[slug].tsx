import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { CasePage as CasePageComponent } from '@/modules/Cases/subpages/CasePage';
import { prefetchCasePageData } from '@/modules/Cases/subpages/CasePage/api';

import type { GetServerSideProps } from 'next';

const CasePage = () => <CasePageComponent />;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const queryClient = composeQueryClient();

	await prefetchCasePageData(queryClient, query.slug as string);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default CasePage;
