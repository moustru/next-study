import { Container } from '@chakra-ui/react';

import { AchieveBlock } from '@/shared/components/AchieveBlock';
import { AchievementModel } from '@/shared/types/Achievement';

import type { Variant } from '@/shared/types/Variant';

// import { achievements } from './mocks';

type SectionAchievementsModel = {
	achievements: AchievementModel[];
	variant: Variant;
};

export const SectionAchievements = ({
	achievements,
	variant,
}: SectionAchievementsModel) => {
	return (
		<Container mb={{ lg: 180, md: 120, xs: '40px' }}>
			<AchieveBlock achievements={achievements} variant={variant} />
		</Container>
	);
};
