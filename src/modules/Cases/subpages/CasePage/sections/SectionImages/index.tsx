import { Box, Container, Flex, useMediaQuery } from '@chakra-ui/react';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

import myImageLoader from '@/shared/utils/imageLoader';

export const SectionImages = ({ images }: any) => {
	const [largerThan768] = useMediaQuery('(min-width: 768px)');

	const imagesURLs = images.data.map((image: any) => image.attributes.url);

	return (
		<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
			{largerThan768 ? (
				<Flex justifyContent="space-between">
					{imagesURLs.map((image: any, i: number) => (
						<Box
							key={image + i}
							position="relative"
							w={{ xs: '100%', md: 330 }}
							h={{ xs: 150, md: 330 }}
						>
							<Image
								src={image}
								loader={myImageLoader}
								alt={`Example ${i}`}
								fill
							/>
						</Box>
					))}
				</Flex>
			) : (
				<Carousel slideGap={16} slideSize="100%">
					{imagesURLs.map((image: any, i: number) => (
						<Carousel.Slide key={image + i}>
							<Box
								position="relative"
								w={{ xs: '100%', md: 330 }}
								h={{ xs: 150, md: 330 }}
							>
								<Image
									src={image}
									loader={myImageLoader}
									alt={`Example ${i}`}
									fill
								/>
							</Box>
						</Carousel.Slide>
					))}
				</Carousel>
			)}
		</Container>
	);
};
