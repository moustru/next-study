import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { RoadStep } from '@/shared/components/RoadStep';

import { roadSteps } from './mocks';

export const SectionHistory = () => {
	return (
		<SectionTemplate title="История лаборатории">
			<Grid
				gridTemplateColumns={{
					lg: `repeat(${roadSteps.length}, 1fr)`,
					xs: 'repeat(1, 1fr)',
				}}
			>
				{roadSteps.map((step, i) => (
					<RoadStep {...step} key={step.year + i} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
