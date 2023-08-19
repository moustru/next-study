import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';

import type {
	CaseDataModel,
	CaseUIModel,
} from '@/modules/Cases/sections/SectionMain/types';

type SectionSimilarProjectsModel = {
	cases: (CaseDataModel & CaseUIModel)[];
};

export const SectionSimilarProjects = ({
	cases,
}: SectionSimilarProjectsModel) => {
	return (
		<SectionTemplate title="Похожие проекты">
			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={8}
			>
				{cases.map((caseItem) => (
					<CaseBlock {...caseItem} key={caseItem.id} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
