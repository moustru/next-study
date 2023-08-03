import { CasesPage } from '@/modules/Cases';

import type { GetStaticProps } from 'next';

const Cases = () => <CasesPage />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default Cases;
