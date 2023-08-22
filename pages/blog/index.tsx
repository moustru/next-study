import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { BlogPage } from '@/modules/Blog';
import { prefetchAllArticlesData } from '@/modules/Blog/api';

import type { GetServerSideProps } from 'next';

const Blog = () => <BlogPage />;

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = composeQueryClient();

	await prefetchAllArticlesData(queryClient);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default Blog;
