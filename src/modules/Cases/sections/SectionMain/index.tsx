import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';

import { getCasesWithUIData } from './lib/formatCasesData';
import { casesItems, casesUI } from './mocks';

export const SectionMain = () => {
	const casesArr = getCasesWithUIData(casesItems, casesUI);

	return (
		<SectionTemplate title="Кейсы" firstBlock mt={{ md: 200, xs: '120px' }}>
			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={{ md: 8, xs: 4 }}
			>
				{casesArr.map((caseItem, i) => (
					<CaseBlock {...caseItem} key={caseItem.title + i} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
