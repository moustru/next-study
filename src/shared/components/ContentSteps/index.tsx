import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { addZeroBeforeDigit } from '@/shared/utils/formatNumbers';

type ContentStepModel = {
	steps: Record<'title' | 'text', string>[];
};

export const ContentSteps = ({ steps }: ContentStepModel) => {
	return (
		<Grid
			templateColumns={{
				lg: 'repeat(4, 1fr)',
				md: 'repeat(2, 1fr)',
				xs: 'repeat(1, 1fr)',
			}}
			rowGap={{ lg: 20, sm: 12, xs: 8 }}
			columnGap={6}
		>
			{steps.map(({ title, text }, i) => (
				<GridItem key={title + i}>
					<Text mb={{ lg: 5, xs: 2 }}>{addZeroBeforeDigit(i + 1)}</Text>
					<Heading as="h3" variant="h3" color="basic.200" mb={{ md: 4, xs: 2 }}>
						{title}
					</Heading>
					<Text variant="md">{text}</Text>
				</GridItem>
			))}
		</Grid>
	);
};