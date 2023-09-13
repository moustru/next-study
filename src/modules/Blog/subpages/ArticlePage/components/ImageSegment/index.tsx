import { Box } from '@chakra-ui/react';
import Image from 'next/image';

import myImageLoader from '@/shared/utils/imageLoader';

type ImageSegmentModel = {
	image: any;
};

export const ImageSegment = ({ image }: ImageSegmentModel) => {
	const imageURL = image?.data?.attributes?.url;

	return (
		<Box
			mx="auto"
			w="100%"
			h={600}
			maxW={1440}
			mb={{ lg: '180px', md: '90px', xs: '32px' }}
			position="relative"
			overflow="hidden"
			boxSizing="content-box"
		>
			<Image
				src={imageURL}
				loader={myImageLoader}
				objectFit="cover"
				alt="Article image"
				fill
			/>
		</Box>
	);
};
