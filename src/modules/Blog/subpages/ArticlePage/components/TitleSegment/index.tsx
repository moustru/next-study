import { Heading } from '@chakra-ui/react';

type TitleSegmentModel = {
	title: string;
};

export const TitleSegment = ({ title }: TitleSegmentModel) => {
	return (
		<Heading as="h1" variant="h1" mb={{ md: 12, xs: 6 }}>
			{title}
		</Heading>
	);
};
