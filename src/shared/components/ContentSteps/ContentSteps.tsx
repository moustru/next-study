import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { addZeroBeforeDigit } from '@/shared/utils/formatNumbers';

type ContentStepModel = {
	steps: Record<'title' | 'text', string>[];
};

export const ContentSteps = ({ steps }: ContentStepModel) => {
	return (
		<Grid
			templateColumns={{
				base: 'repeat(4, 1fr)',
				md: 'repeat(2, 1fr)',
				xs: 'repeat(1, 1fr)',
			}}
			rowGap={{ base: 20, sm: 12 }}
			columnGap={6}
		>
			{steps.map(({ title, text }, i) => (
				<GridItem key={title + i}>
					<Text mb={{ base: 5, sm: 2 }}>{addZeroBeforeDigit(i + 1)}</Text>
					<Heading as="h3" variant="h3" color="basic.200" mb={4}>
						{title}
					</Heading>
					<Text variant="md">{text}</Text>
				</GridItem>
			))}
		</Grid>
	);
};
