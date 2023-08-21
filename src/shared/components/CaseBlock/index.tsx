import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

import { MovingArrow } from '../MovingArrow';

import type { CaseDataModel } from '@/modules/Cases/sections/SectionMain/types';

export const CaseBlock = ({
	slug,
	title,
	developType,
	description,
	bgImage,
	bgColor = 'light.200',
	size = 'md',
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
				h={
					size === 'md'
						? { lg: 460, md: 320, xs: 'auto' }
						: { lg: 380, md: 240, xs: 'auto' }
				}
				flexDirection="column"
				justifyContent="space-between"
				bgImage={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${bgImageURL}`}
				bgRepeat="no-repeat"
				bgColor={bgColor}
				bgPosition="bottom right"
				bgSize={size === 'md' ? { lg: 'auto', xs: '30%' } : '50%'}
				borderRadius={{ md: 56, xs: 20 }}
				px={
					size === 'md'
						? { lg: '100px', md: '64px', xs: '32px' }
						: { lg: '80px', md: '48px', xs: '24px' }
				}
				py={
					size === 'md'
						? { lg: '80px', md: '48px', xs: '32px' }
						: { lg: '70px', md: '40px', xs: '24px' }
				}
			>
				<Box>
					<Text
						variant="sm"
						mb={size === 'md' ? { lg: 8, xs: 4 } : { lg: 6, xs: 3 }}
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
				{size === 'md' && (
					<Text
						variant="md"
						mb={{ lg: 16, xs: 8 }}
						color={variant === 'light' ? 'grey.600' : 'light.100'}
					>
						{description}
					</Text>
				)}
				<MovingArrow isHoverOnParent={hovered} />
			</Flex>
		</Link>
	);
};
