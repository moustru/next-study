import { ArticlePage } from '@/modules/Blog/subpages/ArticlePage';

import type { GetStaticProps } from 'next';

const Article = () => <ArticlePage />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default Article;
