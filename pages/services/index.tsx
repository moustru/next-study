import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { ServicesPage } from '@/modules/Services';
import { prefetchServicesData } from '@/modules/Services/api';

import type { GetServerSideProps } from 'next';

const Services = () => <ServicesPage />;

export const getServerSideProps: GetServerSideProps = async ({}) => {
	const queryClient = composeQueryClient();

	await prefetchServicesData(queryClient);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default Services;
