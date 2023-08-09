import { Box, Container, Text } from '@chakra-ui/react';
import Image from 'next/image';

// TODO: Разобраться позже
// type ArticleSegmentType = 'text' | 'image';

// type Segment = {
// 	type: ArticleSegmentType;
// };

// type TextSegment = Segment & {
// 	content: string;
// 	smallBottomSpace?: boolean;
// };

// type ImageSegment = Segment & {
// 	imageSrc: string;
// };

// type ArticlePageSegmentModel = {
// 	segments: TextSegment[] | ImageSegment[];
// };

export const GenerateSegment = ({ segments }: any) => {
	return segments.map((segment: any, i: number) => {
		if (segment.type === 'text') {
			return (
				<Container
					mb={
						segment.smallBottomSpace
							? { lg: '80px', md: '48px', xs: '32px' }
							: { lg: '180px', md: '120px', xs: '80px' }
					}
					key={segment.type + i}
				>
					<Text variant="xl">{segment.content}</Text>
				</Container>
			);
		}

		return (
			<Box
				key={segment.imageSrc + i}
				width={1440}
				height={600}
				mb={{ lg: 180, md: 120, xs: '80px' }}
				position="relative"
			>
				<Image src={segment.imageSrc} alt="Article image" fill />
			</Box>
		);
	});
};
