import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { Variant } from '@/shared/types/Variant';

type AchieveBlockModel = {
	bgColor?: string;
	variant?: Variant;
	achievements: {
		image: string;
		alt: string;
		place: number;
		text: string;
	}[];
};

const defaultBgColor =
	'radial-gradient(60% 100% at 0% 50%, var(--chakra-colors-basic-200) 0%, var(--chakra-colors-grey-600) 100%);';

export const AchieveBlock = ({
	achievements,
	bgColor = defaultBgColor,
	variant = 'dark',
}: AchieveBlockModel) => {
	return (
		<Flex
			justify="space-between"
			direction={{ lg: 'row', xs: 'column' }}
			px={{ lg: '100px', sm: '64px', xs: '32px' }}
			py={{ lg: '80px', sm: '48px', xs: '24px' }}
			gap={{ lg: 0, sm: 6, xs: 12 }}
			borderRadius={{ md: 56, xs: 28 }}
			sx={{
				background: bgColor,
			}}
		>
			{achievements.map(({ image, alt, place, text }, index) => (
				<Box w={{ lg: 230, sm: '100%' }} key={image + index}>
					<Flex alignItems="center" gap={4} mb={{ lg: 6, sm: 2 }}>
						<Heading
							as="h3"
							variant="h1"
							color={variant === 'dark' ? 'light.100' : 'grey.600'}
						>
							#{place}
						</Heading>
						<Box
							position="relative"
							width={{ xs: '10vw', md: '56px' }}
							height={{ xs: '10vw', md: '56px' }}
						>
							<Image
								src={`/images/achievements/${image}`}
								alt={alt}
								fill
								key={alt + index}
							/>
						</Box>
					</Flex>
					<Text
						color={variant === 'dark' ? 'light.100' : 'grey.600'}
						variant="md"
					>
						{text}
					</Text>
				</Box>
			))}
		</Flex>
	);
};
