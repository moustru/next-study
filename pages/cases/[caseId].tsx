import { dehydrate } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';
import { composeQueryClient } from '@/config/api/queryClient';
import { CasePage as CasePageComponent } from '@/modules/Cases/subpages/CasePage';
import { prefetchCasePageData } from '@/modules/Cases/subpages/CasePage/api';

import type { GetStaticProps } from 'next';

const CasePage = () => <CasePageComponent />;

export async function getStaticPaths() {
	let cases = (await httpStrapi.get('/case-pages?populate=*').json()) as any;

	const paths = cases.data.map((caseItem: any) => ({
		params: { caseId: caseItem.id.toString() },
	}));

	return {
		paths,
		fallback: true,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const queryClient = composeQueryClient();

	await prefetchCasePageData(queryClient, params?.caseId as string);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
		revalidate: 1,
	};
};

export default CasePage;
