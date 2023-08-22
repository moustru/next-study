import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { CasesPage } from '@/modules/Cases';
import { prefetchCasesData } from '@/modules/Cases/api';

import type { GetServerSideProps } from 'next';

const Cases = () => <CasesPage />;

export const getServerSideProps: GetServerSideProps = async ({}) => {
	const queryClient = composeQueryClient();

	await prefetchCasesData(queryClient);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default Cases;
