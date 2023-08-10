import { Grid } from '@chakra-ui/react';

import { getCasesWithUIData } from '@/modules/Cases/sections/SectionMain/lib/formatCasesData';
import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';

import { casesData, casesUI } from './mocks';

export const SectionSimilarProjects = () => {
	const casesArr = getCasesWithUIData(casesData, casesUI);

	return (
		<SectionTemplate title="Похожие проекты">
			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={8}
			>
				{casesArr.map((caseItem, i) => (
					<CaseBlock {...caseItem} key={caseItem.title + i} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
