import { Heading } from '@chakra-ui/react';

type TitleSegmentModel = {
	title: string;
};

export const TitleSegment = ({ title }: TitleSegmentModel) => {
	return (
		<Heading as="h1" variant="h1" mb={12}>
			{title}
		</Heading>
	);
};
