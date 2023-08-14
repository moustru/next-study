import { Service } from '@/config/api/service';
import { HomePage } from '@/modules/Home';
import { REQUESTS_KEYS } from '@/modules/Home/service';

import type { GetStaticProps } from 'next';

const Home = (props: any) => <HomePage {...props} />;

export const getStaticProps: GetStaticProps = async () => {
	const service = new Service(REQUESTS_KEYS);
	const props = await service.execute();

	return {
		props,
		revalidate: 1,
	};
};

export default Home;
