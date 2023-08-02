import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { helpCases } from './mocks/SectionHelp.mocks';
import { ContentSteps } from '@/shared/components/ContentSteps';

export const SectionHelp = ({ ...others }) => {
	return (
		<SectionTemplate title="Чем мы помогаем?" {...others}>
			<ContentSteps steps={helpCases} />
		</SectionTemplate>
	);
};
