import { Heading } from '@chakra-ui/react';

type TitleSegmentModel = {
	articleTitle: string;
};

export const TitleSegment = ({ articleTitle }: TitleSegmentModel) => {
	return (
		<Heading as="h1" variant="h1" maxW="80%" mb={{ md: 12, xs: 6 }}>
			{articleTitle}
		</Heading>
	);
};
