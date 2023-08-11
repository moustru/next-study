import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { AchieveBlock } from '@/shared/components/AchieveBlock';

import { achievements } from './mocks';

export const SectionAchievements = ({ ...others }) => {
	return (
		<SectionTemplate {...others}>
			<AchieveBlock achievements={achievements} />
		</SectionTemplate>
	);
};
