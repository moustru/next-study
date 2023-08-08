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
			direction={{ lg: 'row', sm: 'column' }}
			px={{ base: '100px', sm: '64px' }}
			py={{ base: '80px', sm: '48px' }}
			gap={{ base: 0, sm: 6 }}
			borderRadius={56}
			sx={{
				background: bgColor,
			}}
		>
			{achievements.map(({ image, alt, place, text }, index) => (
				<Box w={{ base: 230, sm: '100%' }} key={image + index}>
					<Flex alignItems="start" gap={4} mb={{ base: 6, sm: 2 }}>
						<Heading
							as="h3"
							variant="h1"
							color={variant === 'dark' ? 'light.100' : 'grey.600'}
						>
							#{place}
						</Heading>
						<Image
							src={`/images/achievements/${image}`}
							alt={alt}
							width={56}
							height={56}
							key={alt + index}
						/>
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
