import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { achievements } from './mocks/SectionAchievements.mocks';
import { AchieveBlock } from '@/shared/components/AchieveBlock/AchieveBlock';

export const SectionAchievements = ({ ...others }) => {
	return (
		<SectionTemplate {...others}>
			<AchieveBlock achievements={achievements} />
		</SectionTemplate>
	);
};
