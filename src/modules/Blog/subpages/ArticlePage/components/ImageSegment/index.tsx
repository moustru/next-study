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
			w={{ xl: 1440 }}
			h={{ xs: 'auto', xl: 600 }}
			maxW={1440}
			mb={{ lg: '180px', md: '90px', xs: '32px' }}
			position="relative"
			overflow="hidden"
			pb={{ xs: '50%', xl: 0 }}
			boxSizing="content-box"
		>
			<Image src={imageURL} loader={myImageLoader} alt="Article image" fill />
		</Box>
	);
};
