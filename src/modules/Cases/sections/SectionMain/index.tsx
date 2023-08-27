import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import CaseBlock from '@/shared/components/CaseBlock';

import { useCasesData } from '../../api';

export const SectionMain = () => {
	const { data } = useCasesData();

	const content = data.data.map((obj: any) => ({
		...obj.attributes.cardOptions,
		id: obj.id,
	}));

	return (
		<SectionTemplate title="Кейсы" firstBlock>
			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={{ md: 8, xs: 4 }}
			>
				{content.map((caseItem: any) => (
					<CaseBlock.Small {...caseItem} key={caseItem.id} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
