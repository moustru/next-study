import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { RoadStep } from '@/shared/components/RoadStep';

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

	const gridTemplateColumnsString = Array(years.length - 1)
		.fill('1fr')
		.concat('calc(240px)')
		.join(' ');

	return (
		<SectionTemplate title={heading}>
			<Grid
				gridTemplateColumns={{
					lg: gridTemplateColumnsString,
					xs: 'repeat(1, 1fr)',
				}}
			>
				{formattedYears.map((step, i) => (
					<RoadStep
						{...step}
						key={step.year + i}
						isLast={i === formattedYears.length - 1}
					/>
				))}
			</Grid>
		</SectionTemplate>
	);
};
