import { dehydrate } from '@tanstack/react-query';

import { composeQueryClient } from '@/config/api/queryClient';
import { BlogPage } from '@/modules/Blog';
import { prefetchAllArticlesData } from '@/modules/Blog/api';

import type { GetStaticProps } from 'next';

const Blog = () => <BlogPage />;

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = composeQueryClient();

	await prefetchAllArticlesData(queryClient);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
		revalidate: 1,
	};
};

export default Blog;
