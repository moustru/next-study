import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import type { Size } from '@/shared/types/Size';
import type { Variant } from '@/shared/types/Variant';

import ArrowSVG from 'public/icons/arrow_right.svg';

type CaseBlockProps = {
	title: string;
	developType: string;
	description: string;
	href: string;
	bgImage: string;
	bgColor?: string;
	size?: Size;
	variant?: Variant;
};

export const CaseBlock = ({
	title,
	developType,
	description,
	href,
	bgImage,
	bgColor = 'light.200',
	size = 'md',
	variant = 'light',
}: CaseBlockProps) => {
	return (
		<Link href={href}>
			<Flex
				h={
					size === 'md'
						? { lg: 460, md: 320, xs: 'auto' }
						: { lg: 380, md: 240, xs: 'auto' }
				}
				flexDirection="column"
				justifyContent="space-between"
				bgImage={`/images/cases/${bgImage}`}
				bgRepeat="no-repeat"
				bgColor={bgColor}
				bgPosition="bottom right"
				bgSize={size === 'md' ? { lg: 'auto', xs: '50%' } : '50%'}
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
				<Box w={{ xs: '32px', md: '60px' }}>
					<ArrowSVG
						fill={variant === 'light' ? '#26282B' : '#FFFFFF'}
						width="100%"
					/>
				</Box>
			</Flex>
		</Link>
	);
};
