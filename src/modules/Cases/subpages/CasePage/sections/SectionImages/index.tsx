import { Container, Flex, useMediaQuery } from '@chakra-ui/react';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

import myImageLoader from '@/shared/utils/imageLoader';

export const SectionImages = ({ images }: any) => {
	const [largerThan768] = useMediaQuery('(min-width: 768px)', {
		ssr: true,
		fallback: true,
	});

	const imagesURLs = images.data.map((image: any) => image.attributes.url);

	return (
		<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
			{largerThan768 ? (
				<Flex justifyContent="space-between" gap="30px">
					{imagesURLs.map((image: any, i: number) => (
						<div
							key={image}
							style={{
								position: 'relative',
								flexBasis: '30%',
								height: '80vh',
							}}
						>
							<Image
								src={image}
								loader={myImageLoader}
								alt={`Example ${i}`}
								fill
								objectFit="contain"
							/>
						</div>
					))}
				</Flex>
			) : (
				<Carousel slideGap={16} slideSize="100%">
					{imagesURLs.map((image: any, i: number) => (
						<Carousel.Slide key={image + i}>
							<Flex justify="center">
								<Image
									src={image}
									loader={myImageLoader}
									alt={`Example ${i}`}
									width={200}
									height={300}
								/>
							</Flex>
						</Carousel.Slide>
					))}
				</Carousel>
			)}
		</Container>
	);
};
