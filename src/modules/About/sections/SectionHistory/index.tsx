import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { RoadStep } from '@/shared/components/RoadStep';

// import { roadSteps } from './mocks';

type SectionHistoryModel = {
	heading: string;
	years: {
		id: number;
		year: string;
		changelog: {
			text: string;
		}[];
	}[];
};

export const SectionHistory = ({ heading, years }: SectionHistoryModel) => {
	const formattedYears = years.map(({ year, changelog }) => ({
		year,
		changelog: changelog.map((log) => log.text),
	}));

	return (
		<SectionTemplate title={heading}>
			<Grid
				gridTemplateColumns={{
					lg: `repeat(${years.length}, 1fr)`,
					xs: 'repeat(1, 1fr)',
				}}
			>
				{formattedYears.map((step, i) => (
					<RoadStep {...step} key={step.year + i} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
