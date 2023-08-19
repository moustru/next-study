import { Box, Container, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

import { images } from './mocks';

type SectionDescriptionModel = {
	subtext: string;
	suptext: string;
};

export const SectionDescription = ({
	subtext,
	suptext,
}: SectionDescriptionModel) => {
	const [largerThan768] = useMediaQuery('(min-width: 768px)');

	return (
		<>
			<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
				<Text variant="xl" mb={{ lg: 20, md: 10, xs: 8 }}>
					{suptext}
				</Text>

				<Text variant="xl">{subtext}</Text>
			</Container>

			{/* Это блок с картинками. Из страпи пока не отдается */}
			{/* <Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
				{largerThan768 ? (
					<Flex justifyContent="space-between">
						{images.map((image, i) => (
							<Box
								key={image + i}
								position="relative"
								w={{ xs: '100%', md: 330 }}
								h={{ xs: 150, md: 330 }}
							>
								<Image src={image} alt={`Example ${i}`} fill />
							</Box>
						))}
					</Flex>
				) : (
					<Carousel slideGap={16} slideSize="100%">
						{images.map((image, i) => (
							<Carousel.Slide key={image + i}>
								<Box
									position="relative"
									w={{ xs: '100%', md: 330 }}
									h={{ xs: 150, md: 330 }}
								>
									<Image src={image} alt={`Example ${i}`} fill />
								</Box>
							</Carousel.Slide>
						))}
					</Carousel>
				)}
			</Container> */}
		</>
	);
};
