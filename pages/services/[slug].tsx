import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { prefetchPaginatedCasesData } from '@/modules/Cases/api';
import { ServicePage as ServicePageComponent } from '@/modules/Services/subpages/ServicePage';
import { prefetchServicePageData } from '@/modules/Services/subpages/ServicePage/api';

import type { GetServerSideProps } from 'next';

const ServicePage = () => <ServicePageComponent />;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const queryClient = composeQueryClient();

	await Promise.all([
		prefetchServicePageData(queryClient, query.slug as string),
		prefetchPaginatedCasesData(queryClient, '&pagination[pageSize]=2'),
	]);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default ServicePage;
