import { CasePage as CasePageComponent } from '@/modules/Cases/subpages/CasePage';

import type { GetStaticProps } from 'next';

const CasePage = () => <CasePageComponent />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default CasePage;
