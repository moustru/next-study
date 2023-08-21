import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { prefetchPaginatedCasesData } from '@/modules/Cases/api';
import { HomePage } from '@/modules/Home';
import { prefetchHomeData } from '@/modules/Home/api';

import type { GetServerSideProps } from 'next';

const Home = () => <HomePage />;

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = composeQueryClient();

	await Promise.all([
		prefetchHomeData(queryClient),
		prefetchPaginatedCasesData(queryClient, '&pagination[pageSize]=2'),
	]);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default Home;
