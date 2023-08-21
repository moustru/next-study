import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';

import type { CaseDataModel } from '@/modules/Cases/sections/SectionMain/types';

type SectionCasesModel = {
	heading: string;
	cases: CaseDataModel[];
};

export const SectionCases = ({ heading, cases }: SectionCasesModel) => {
	return (
		<SectionTemplate title={heading}>
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
