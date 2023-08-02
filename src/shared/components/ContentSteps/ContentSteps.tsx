import { addZeroBeforeDigit } from '@/shared/utils/formatNumbers';
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';

type ContentStepModel = {
	steps: Record<'title' | 'text', string>[];
};

export const ContentSteps = ({ steps }: ContentStepModel) => {
	return (
		<Grid templateColumns="repeat(4, 1fr)" rowGap={20} columnGap={6}>
			{steps.map(({ title, text }, i) => (
				<GridItem key={title + i}>
					<Text mb={5}>{addZeroBeforeDigit(i + 1)}</Text>
					<Heading as="h3" variant="h3" color="basic.200" mb={4}>
						{title}
					</Heading>
					<Text variant="md">{text}</Text>
				</GridItem>
			))}
		</Grid>
	);
};
