import { Stack, Button } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';

import { caseItems } from './mocks/SectionCases.mocks';

import ArrowSVG from 'public/icons/arrow_right.svg';

export const SectionCases = ({ ...others }) => {
	return (
		<SectionTemplate title="Кейсы" {...others}>
			<>
				<Stack
					gap={{ base: '100px', md: '64px' }}
					mb={{ base: '60px', md: '32px' }}
				>
					{caseItems.map((caseItem, i) => (
						<CaseBlock {...caseItem} key={caseItem.title + i} />
					))}
				</Stack>
				<Button
					float="right"
					rightIcon={<ArrowSVG fill="#26282B" width="24px" />}
					variant="ghost"
				>
					Ко всем кейсам
				</Button>
			</>
		</SectionTemplate>
	);
};
