import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ContentSteps } from '@/shared/components/ContentSteps';

import { devSteps } from './mocks';

export const SectionDevSteps = () => {
	return (
		<SectionTemplate title="Этапы разработки">
			<ContentSteps steps={devSteps} />
		</SectionTemplate>
	);
};
