import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { AchieveBlock } from '@/shared/components/AchieveBlock';

// import { achievements } from './mocks';

export const SectionAchievements = ({
	achievements,
	variant,
	...others
}: any) => {
	return (
		<SectionTemplate {...others}>
			<AchieveBlock achievements={achievements} variant={variant} />
		</SectionTemplate>
	);
};
