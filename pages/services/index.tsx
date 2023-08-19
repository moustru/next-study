import { composeQueryClient } from '@/config/api/queryClient';
import { ServicesPage } from '@/modules/Services';
import { prefetchServicesData } from '@/modules/Services/api';

import type { GetStaticProps } from 'next';

const Services = () => <ServicesPage />;

export const getStaticProps: GetStaticProps = async ({}) => {
	const queryClient = composeQueryClient();

	await prefetchServicesData(queryClient);

	return {
		props: {},
		revalidate: 1,
	};
};

export default Services;
