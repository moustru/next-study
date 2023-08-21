import {
	Box,
	Flex,
	Heading,
	Stack,
	Text,
	useMediaQuery,
} from '@chakra-ui/react';

type RoadStepModel = {
	year: string;
	changelog: string[];
};

export const RoadStep = ({ year, changelog }: RoadStepModel) => {
	const [largerThan1024] = useMediaQuery('(min-width: 1024px)');

	if (largerThan1024) {
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
				{changelog.map((log, i) => (
					<Text variant="lg" key={log + i} paddingRight="20px">
						{log}
					</Text>
				))}
			</Box>
		);
	}

	return (
		<Flex h={{ xs: 300, sm: 200 }}>
			<Flex flexDirection="column" alignItems="center">
				<Box
					width={6}
					height={6}
					minW={6}
					borderRadius="50%"
					backgroundColor="basic.200"
				/>

				<Box height="100%" width="2px" backgroundColor="basic.200" />
			</Flex>

			<Heading as="h3" variant="h3" color="basic.200" mx={12}>
				{year}
			</Heading>
			<Stack>
				{changelog.map((log, i) => (
					<Text variant="lg" key={log + i} paddingRight="20px">
						{log}
					</Text>
				))}
			</Stack>
		</Flex>
	);
};
