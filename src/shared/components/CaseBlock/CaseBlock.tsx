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
			h={size === 'md' ? 460 : 380}
			flexDirection="column"
			justifyContent="space-between"
			bgImage={`/images/cases/${bgImage}`}
			bgRepeat="no-repeat"
			bgColor={bgColor}
			bgPosition="bottom right"
			bgSize={size === 'md' ? 'auto' : '50%'}
			borderRadius={56}
			px={size === 'md' ? '100px' : '80px'}
			py={size === 'md' ? '80px' : '70px'}
		>
			<Box>
				<Text
					variant="sm"
					mb={size === 'md' ? 8 : 6}
					color={variant === 'light' ? 'grey.600' : 'light.100'}
				>
					{developType}
				</Text>
				<Heading
					as="h3"
					variant="h2"
					mb={4}
					color={variant === 'light' ? 'grey.600' : 'light.100'}
				>
					{title}
				</Heading>
			</Box>
			{size === 'md' && (
				<Text
					variant="md"
					mb={16}
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
