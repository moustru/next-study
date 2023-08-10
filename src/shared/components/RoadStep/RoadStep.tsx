import { Box, Flex, Heading, Text } from '@chakra-ui/react';

type RoadStepModel = {
	year: number;
	milestones: string[];
};

export const RoadStep = ({ year, milestones }: RoadStepModel) => {
	return (
		<Box>
			<Flex alignItems="center" mb={12}>
				<Box
					width={6}
					height={6}
					minW={6}
					borderRadius="50%"
					backgroundColor="basic.200"
				/>

				<Box width="100%" height="2px" backgroundColor="basic.200" />
			</Flex>

			<Heading as="h3" variant="h3" color="basic.200" mb={6}>
				{year}
			</Heading>
			{milestones.map((milestone, i) => (
				<Text variant="lg" key={milestone + i} paddingRight="20px">
					{milestone}
				</Text>
			))}
		</Box>
	);
};
