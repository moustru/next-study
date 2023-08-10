import { CasePage as CasePageComponent } from '@/modules/Cases/subpages/CasePage';

import type { GetServerSideProps } from 'next';

const CasePage = () => <CasePageComponent />;

export const getServerSideProps: GetServerSideProps = async ({}) => ({
	props: {},
});

export default CasePage;
