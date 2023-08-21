import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { AboutPage } from '@/modules/About';
import { prefetchAboutData, prefetchTeamData } from '@/modules/About/api';

import type { GetServerSideProps } from 'next';

const About = () => <AboutPage />;

export const getServerSideProps: GetServerSideProps = async () => {
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
