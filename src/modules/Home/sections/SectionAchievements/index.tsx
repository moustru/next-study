import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { AchieveBlock } from '@/shared/components/AchieveBlock/AchieveBlock';

import { achievements } from './mocks/SectionAchievements.mocks';

export const SectionAchievements = ({ ...others }) => {
	return (
		<SectionTemplate {...others}>
			<AchieveBlock achievements={achievements} />
		</SectionTemplate>
	);
};
