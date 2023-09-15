import { Box } from '@chakra-ui/react';
import Image from 'next/image';

import myImageLoader from '@/shared/utils/imageLoader';

type ImageSegmentModel = {
	image: any;
};

export const ImageSegment = ({ image }: ImageSegmentModel) => {
	const imagesURLs = image?.data?.map((img: any) => img?.attributes?.url);

	return imagesURLs?.map((imageURL: any, i: number) => (
		<Box
			key={imageURL + i}
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
	));
};
