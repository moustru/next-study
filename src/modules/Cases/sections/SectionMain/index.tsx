import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';

import { useCasesData } from '../../api';

import { getCasesWithUIData } from './lib/formatCasesData';
import { casesItems, casesUI } from './mocks';

export const SectionMain = () => {
	// const casesArr = getCasesWithUIData(casesItems, casesUI);

	const { data } = useCasesData();

	const content = data?.data[0]?.attributes;

	console.log(content);

	return (
		<SectionTemplate title="Кейсы" firstBlock mt={{ md: 200, xs: '120px' }}>
			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={{ md: 8, xs: 4 }}
			>
				{content?.cases?.map((caseItem: any) => (
					<CaseBlock {...caseItem} key={caseItem.id} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
