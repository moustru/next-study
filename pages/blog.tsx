import { BlogPage } from '@/modules/Blog';

import type { GetStaticProps } from 'next';

const Blog = () => <BlogPage />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default Blog;
