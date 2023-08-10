import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';

import { caseItems } from './mocks';

export const SectionCases = () => {
	return (
		<SectionTemplate title="Примеры кейсов">
			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={8}
			>
				<CaseBlock
					{...caseItems[0]}
					bgColor="grey.200"
					size="sm"
					key={caseItems[0].title}
				/>
				<CaseBlock
					{...caseItems[1]}
					bgColor="grey.600"
					size="sm"
					variant="dark"
					key={caseItems[1].title}
				/>
			</Grid>
		</SectionTemplate>
	);
};
