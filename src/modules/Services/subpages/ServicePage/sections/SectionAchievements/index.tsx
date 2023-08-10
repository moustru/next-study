import { Container } from '@chakra-ui/react';

import { AchieveBlock } from '@/shared/components/AchieveBlock';

import { achievements } from './mocks';

export const SectionAchievements = () => {
	return (
		<Container mb={{ lg: 180, md: 120, xs: '40px' }}>
			<AchieveBlock
				achievements={achievements}
				bgColor="linear-gradient(90deg, var(--chakra-colors-light-100) 40%, var(--chakra-colors-basic-100) 100%);"
				variant="light"
			/>
		</Container>
	);
};
