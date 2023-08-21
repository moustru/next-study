import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { prefetchHomeCasesData } from '@/modules/Cases/api';
import { HomePage } from '@/modules/Home';
import { prefetchHomeData } from '@/modules/Home/api';

import type { GetStaticProps } from 'next';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = composeQueryClient();

	await Promise.all([
		prefetchHomeData(queryClient),
		prefetchHomeCasesData(queryClient, '&pagination[pageSize]=2'),
	]);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
		revalidate: 1,
	};
};

export default Home;
