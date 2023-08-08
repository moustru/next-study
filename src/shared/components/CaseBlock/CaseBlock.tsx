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
		<Flex
			h={size === 'md' ? { base: 460, md: 320 } : { base: 380, md: 240 }}
			flexDirection="column"
			justifyContent="space-between"
			bgImage={`/images/cases/${bgImage}`}
			bgRepeat="no-repeat"
			bgColor={bgColor}
			bgPosition="bottom right"
			bgSize={size === 'md' ? { base: 'auto', xs: '50%' } : '50%'}
			borderRadius={56}
			px={
				size === 'md'
					? { base: '100px', md: '64px' }
					: { base: '80px', md: '48px' }
			}
			py={
				size === 'md'
					? { base: '80px', md: '48px' }
					: { base: '70px', md: '40px' }
			}
		>
			<Box>
				<Text
					variant="sm"
					mb={size === 'md' ? { base: 8, md: 4 } : { base: 6, md: 3 }}
					color={variant === 'light' ? 'grey.600' : 'light.100'}
				>
					{developType}
				</Text>
				<Heading
					as="h3"
					variant="h2"
					mb={{ base: 4, md: 2 }}
					color={variant === 'light' ? 'grey.600' : 'light.100'}
				>
					{title}
				</Heading>
			</Box>
			{size === 'md' && (
				<Text
					variant="md"
					mb={{ base: 16, md: 8 }}
					color={variant === 'light' ? 'grey.600' : 'light.100'}
				>
					{description}
				</Text>
			)}
			<Link href={href}>
				<ArrowSVG
					fill={variant === 'light' ? '#26282B' : '#FFFFFF'}
					width="60px"
				/>
			</Link>
		</Flex>
	);
};
