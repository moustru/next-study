import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import css from './index.module.css';

import type { CaseDataModel } from '@/modules/Cases/sections/SectionMain/types';

export const CaseBlock = ({
	id,
	title,
	developType,
	description,
	bgImageSrc,
	bgColor = 'light.200',
	size = 'md',
	variant = 'light',
}: CaseDataModel) => {
	const [hovered, setHovered] = useState(false);
	const hoverHandler = () => setHovered(!hovered);

	return (
		<Link href={`/cases/${id}`}>
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
				bgImage={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${bgImageSrc}`}
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
				<div className={css.arrow}>
					<motion.div
						className={css.blackmove}
						initial={{ x: '-10%' }}
						animate={{ x: hovered ? '100%' : 0 }}
						transition={{ duration: 0.3, cubicBezier: '0.83, 0, 0.17, 1' }}
					/>
				</div>
			</Flex>
		</Link>
	);
};
