import { ServicesPage } from '@/modules/Services';
import type { GetStaticProps } from 'next';

const Services = () => <ServicesPage />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default Services;
