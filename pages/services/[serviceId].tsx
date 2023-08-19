import { httpStrapi } from '@/config/api';
import { composeQueryClient } from '@/config/api/queryClient';
import { ServicePage as ServicePageComponent } from '@/modules/Services/subpages/ServicePage';
import { prefetchServicePageData } from '@/modules/Services/subpages/ServicePage/api';

import type { GetStaticProps } from 'next';

const ServicePage = () => <ServicePageComponent />;

export async function getStaticPaths() {
	let services = (await httpStrapi.get('/service-pages').json()) as any;

	const paths = services.data.map((service: any) => ({
		params: { serviceId: service.id.toString() },
	}));

	return {
		paths,
		fallback: true,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const queryClient = composeQueryClient();

	await prefetchServicePageData(queryClient, params?.serviceId as string);

	return {
		props: {},
		revalidate: 1,
	};
};

export default ServicePage;
