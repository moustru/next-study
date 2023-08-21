import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { AboutPage } from '@/modules/About';
import { prefetchAboutData, prefetchTeamData } from '@/modules/About/api';

import type { GetStaticProps } from 'next';

const About = () => <AboutPage />;

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = composeQueryClient();

	await Promise.all([
		prefetchAboutData(queryClient),
		prefetchTeamData(queryClient),
	]);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default About;
