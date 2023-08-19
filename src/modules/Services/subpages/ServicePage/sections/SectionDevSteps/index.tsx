import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ContentSteps } from '@/shared/components/ContentSteps';

import type { StepBlock } from '@/shared/types/StepBlock';

type SectionDevStepsModel = {
	heading: string;
	steps: StepBlock[];
};

export const SectionDevSteps = ({ steps, heading }: SectionDevStepsModel) => {
	return (
		<SectionTemplate title={heading}>
			<ContentSteps steps={steps} />
		</SectionTemplate>
	);
};
