import { composeQueryClient } from '@/config/api/queryClient';
import { CasesPage } from '@/modules/Cases';
import { prefetchCasesData } from '@/modules/Cases/api';

import type { GetStaticProps } from 'next';

const Cases = () => <CasesPage />;

export const getStaticProps: GetStaticProps = async ({}) => {
	const queryClient = composeQueryClient();

	await prefetchCasesData(queryClient);

	return {
		props: {},
		revalidate: 1,
	};
};

export default Cases;
