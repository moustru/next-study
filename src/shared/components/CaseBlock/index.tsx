import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

import { MovingArrow } from '../MovingArrow';

import type { CaseDataModel } from '@/modules/Cases/sections/SectionMain/types';

export const CaseBlock = ({
	slug,
	title,
	developType,
	bgImage,
	bgColor = 'light.200',
	variant = 'light',
}: CaseDataModel) => {
	const [hovered, setHovered] = useState(false);
	const hoverHandler = () => setHovered(!hovered);

	const bgImageURL = bgImage.data.attributes.url;

	return (
		<Link href={`/cases/${slug}`}>
			<Flex
				position="relative"
				onMouseEnter={hoverHandler}
				onMouseLeave={hoverHandler}
				h={{ lg: 380, md: 240, xs: 'auto' }}
				flexDirection="column"
				justifyContent="space-between"
				bgImage={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${bgImageURL}`}
				bgRepeat="no-repeat"
				bgColor={bgColor}
				bgPosition="bottom right"
				bgSize="50%"
				borderRadius={{ md: 56, xs: 20 }}
				px={{ lg: '80px', md: '48px', xs: '36px' }}
				py={{ lg: '70px', md: '48px', xs: '48px' }}
			>
				<Box>
					<Text
						variant="sm"
						mb={{ lg: 6, xs: 3 }}
						color={variant === 'light' ? 'grey.600' : 'light.100'}
					>
						{developType}
					</Text>
					<Heading
						as="h3"
						variant="h2"
						mb={{ lg: 4, xs: 2 }}
						color={variant === 'light' ? 'grey.600' : 'light.100'}
					>
						{title}
					</Heading>
				</Box>
				<MovingArrow isHoverOnParent={hovered} isDark={variant === 'dark'} />
			</Flex>
		</Link>
	);
};
