import {
	Button,
	Container,
	ContainerProps,
	Flex,
	Heading,
	IconButton,
	useMediaQuery,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import type { EmblaCarouselType } from 'embla-carousel-react';

import ChevronLeftSVG from 'public/icons/chevron_left.svg';
import ChevronRightSVG from 'public/icons/chevron_right.svg';
import PlusSVG from 'public/icons/plus.svg';

type CarouselEvents = Pick<EmblaCarouselType, 'scrollPrev' | 'scrollNext'>;

type SectionTemplateModel = ContainerProps & {
	children: ReactElement | ReactElement[];
	title?: string;
	carouselControls?: boolean;
	withButton?: boolean;
	firstBlock?: boolean;
	handleButtonClick?: () => void;
	carouselEvents?: CarouselEvents;
};

export const SectionTemplate = ({
	children,
	title = '',
	carouselControls = false,
	firstBlock = false,
	withButton = false,
	handleButtonClick = () => false,
	carouselEvents = undefined,
	...others
}: SectionTemplateModel) => {
	const handlePrevClick = () => carouselEvents?.scrollPrev();

	const handleNextClick = () => carouselEvents?.scrollNext();

	const [screenLarger1024] = useMediaQuery('(min-width: 1024px)', {
		fallback: true,
		ssr: true,
	});

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
					alignItems={{ xs: 'start', md: 'center' }}
					gap={{ xs: 6, md: 0 }}
					flexDirection={{ xs: 'column', md: 'row' }}
					mb={{ lg: 20, sm: 12, xs: 8 }}
				>
					<Heading
						as={firstBlock ? 'h1' : 'h2'}
						variant={firstBlock ? 'h1' : 'h2'}
					>
						{title}
					</Heading>

					<Flex gap={4}>
						{withButton && (
							<Button
								size="md"
								variant="blue"
								rightIcon={<PlusSVG width="16px" />}
								onClick={handleButtonClick}
							>
								Стать частью команды
							</Button>
						)}

						{screenLarger1024 && (
							<Flex gap={4}>
								<IconButton
									minW={54}
									aria-label="Slide prev"
									icon={<ChevronLeftSVG fill="#000" width="20px" />}
									bgColor="transparent"
									p={4}
									onClick={handlePrevClick}
								/>
								<IconButton
									minW={54}
									aria-label="Slide next"
									icon={<ChevronRightSVG fill="#000" width="20px" />}
									bgColor="transparent"
									p={4}
									onClick={handleNextClick}
								/>
							</Flex>
						)}
					</Flex>
				</Flex>
			)}

			{children}
		</Container>
	);
};
