import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CustomIcon } from '@/shared/components/CustomIcon';
import { Stack, Button } from '@chakra-ui/react';
import { caseItems } from './mocks/SectionCases.mocks';
import { CaseBlock } from '@/shared/components/CaseBlock';

export const SectionCases = ({ ...others }) => {
	return (
		<SectionTemplate title="Кейсы" {...others}>
			<>
				<Stack gap={100} mb="60px">
					{caseItems.map((caseItem, i) => (
						<CaseBlock {...caseItem} key={caseItem.title + i} />
					))}
				</Stack>
				<Button
					float="right"
					rightIcon={<CustomIcon icon="arrow_right" />}
					variant="ghost"
				>
					Ко всем кейсам
				</Button>
			</>
		</SectionTemplate>
	);
};
