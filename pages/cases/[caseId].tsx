import { Service } from '@/config/api/service';
import { CasePage as CasePageComponent } from '@/modules/Cases/subpages/CasePage';

import type { GetServerSideProps } from 'next';

const CasePage = () => <CasePageComponent />;

export const getServerSideProps: GetServerSideProps = async ({}) => {
	const service = new Service(['botanical-garden']);
	const props = await service.execute();

	return {
		props,
	};
};

export default CasePage;
