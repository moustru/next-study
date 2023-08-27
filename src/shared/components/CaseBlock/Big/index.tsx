import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import htmlParser from 'html-react-parser';
import Link from 'next/link';
import { useState } from 'react';

import { MovingArrow } from '../../MovingArrow';

import type { CaseDataModel } from '@/modules/Cases/sections/SectionMain/types';

export const Big = ({
	slug,
	title,
	developType,
	bgImage,
	description = '',
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
				flexDirection="column"
				justifyContent="space-between"
				bgImage={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${bgImageURL}`}
				bgRepeat="no-repeat"
				bgColor={bgColor}
				bgPosition="bottom right"
				bgSize="contain"
				borderRadius={{ md: 56, xs: 20 }}
				paddingInline={{ lg: '100px', md: '48px', xs: '36px' }}
				py={{ lg: '70px', md: '48px', xs: '48px' }}
			>
				<Box>
					<Text
						variant="sm"
						mb={{ lg: 9, xs: 3 }}
						color={variant === 'light' ? 'grey.600' : 'light.100'}
					>
						{htmlParser(developType)}
					</Text>
					<Heading
						as="h3"
						variant="h2"
						mb={{ lg: 4, xs: 2 }}
						color={variant === 'light' ? 'grey.600' : 'light.100'}
					>
						{htmlParser(title)}
					</Heading>
					<Text
						variant="sm"
						mb={{ lg: 16, xs: 8 }}
						color={variant === 'light' ? 'grey.600' : 'light.100'}
					>
						{htmlParser(description)}
					</Text>
				</Box>
				<MovingArrow isHoverOnParent={hovered} isDark={variant === 'dark'} />
			</Flex>
		</Link>
	);
};
