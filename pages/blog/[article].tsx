import { ArticlePage } from '@/modules/Blog/subpages/ArticlePage';

import type { GetServerSideProps } from 'next';

const Article = () => <ArticlePage />;

export const getServerSideProps: GetServerSideProps = async ({}) => ({
	props: {},
});

export default Article;
