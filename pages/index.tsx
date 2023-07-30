import { HomePage } from '@/modules/Home/ui';
import type { GetStaticProps } from 'next';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default Home;
