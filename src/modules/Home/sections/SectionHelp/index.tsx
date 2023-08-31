import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ContentSteps } from '@/shared/components/ContentSteps';

export const SectionHelp = ({ heading, steps, ...others }: any) => {
	return (
		<SectionTemplate title={heading} {...others}>
			<ContentSteps steps={steps} />
		</SectionTemplate>
	);
};
