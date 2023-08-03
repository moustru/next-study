import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ContentSteps } from '@/shared/components/ContentSteps';

import { helpCases } from './mocks/SectionHelp.mocks';

export const SectionHelp = ({ ...others }) => {
	return (
		<SectionTemplate title="Чем мы помогаем?" {...others}>
			<ContentSteps steps={helpCases} />
		</SectionTemplate>
	);
};
