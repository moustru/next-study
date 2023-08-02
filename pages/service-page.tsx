import { ServicePage as ServicePageComponent } from '@/modules/Services/subpages/ServicePage';
import type { GetStaticProps } from 'next';

const ServicePage = () => <ServicePageComponent />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default ServicePage;
