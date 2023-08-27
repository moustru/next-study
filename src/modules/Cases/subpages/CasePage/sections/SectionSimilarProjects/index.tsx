import { Grid } from '@chakra-ui/react';

import { usePaginatedCasesData } from '@/modules/Cases/api';
import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import CaseBlock from '@/shared/components/CaseBlock';

import type { CaseDataModel } from '@/modules/Cases/sections/SectionMain/types';

export const SectionSimilarProjects = () => {
	const { data } = usePaginatedCasesData('&pagination[pageSize]=2');

	const cases: CaseDataModel[] = data.data.map((obj: any) => ({
		...obj.attributes.cardOptions,
		id: obj.id,
	}));

	return (
		<SectionTemplate title="Похожие проекты">
			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={8}
			>
				{cases.map((caseItem) => (
					<CaseBlock.Small {...caseItem} key={caseItem.id} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
