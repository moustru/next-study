import { AboutPage } from '@/modules/About';

import type { GetStaticProps } from 'next';

const About = () => <AboutPage />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default About;
