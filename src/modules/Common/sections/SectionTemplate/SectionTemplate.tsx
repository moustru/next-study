import {
	Container,
	ContainerProps,
	Flex,
	Heading,
	IconButton,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import type { EmblaCarouselType } from 'embla-carousel-react';

import ChevronLeftSVG from 'public/icons/chevron_left.svg';
import ChevronRightSVG from 'public/icons/chevron_right.svg';

type CarouselEvents = Pick<EmblaCarouselType, 'scrollPrev' | 'scrollNext'>;

type SectionTemplateModel = ContainerProps & {
	children: ReactElement | ReactElement[];
	title?: string;
	carouselControls?: boolean;
	firstBlock?: boolean;
	carouselEvents?: CarouselEvents;
};

export const SectionTemplate = ({
	children,
	title = '',
	carouselControls = false,
	firstBlock = false,
	carouselEvents = undefined,
	...others
}: SectionTemplateModel) => {
	const handlePrevClick = () => carouselEvents?.scrollPrev();

	const handleNextClick = () => carouselEvents?.scrollNext();

	return (
		<Container
			as="section"
			mt={firstBlock ? { lg: '200px', xs: '120px' } : 0}
			mb={{ lg: '180px', sm: '100px', xs: '60px' }}
			{...others}
		>
			{title && !carouselControls && (
				<Heading
					as={firstBlock ? 'h1' : 'h2'}
					variant={firstBlock ? 'h1' : 'h2'}
					mb={{ lg: 20, sm: 12, xs: 8 }}
				>
					{title}
				</Heading>
			)}

			{carouselControls && (
				<Flex
					justify="space-between"
					alignItems="center"
					mb={{ lg: 20, sm: 12, xs: 8 }}
				>
					<Heading
						as={firstBlock ? 'h1' : 'h2'}
						variant={firstBlock ? 'h1' : 'h2'}
					>
						{title}
					</Heading>

					<Flex gap={4}>
						<IconButton
							aria-label="Slide prev"
							icon={<ChevronLeftSVG fill="#000" width="20px" />}
							bgColor="transparent"
							p={4}
							onClick={handlePrevClick}
						/>
						<IconButton
							aria-label="Slide next"
							icon={<ChevronRightSVG fill="#000" width="20px" />}
							bgColor="transparent"
							p={4}
							onClick={handleNextClick}
						/>
					</Flex>
				</Flex>
			)}

			{children}
		</Container>
	);
};
