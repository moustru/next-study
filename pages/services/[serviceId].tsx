import { ServicePage as ServicePageComponent } from '@/modules/Services/subpages/ServicePage';

import type { GetServerSideProps } from 'next';

const ServicePage = () => <ServicePageComponent />;

export const getServerSideProps: GetServerSideProps = async ({}) => ({
	props: {},
});

export default ServicePage;
