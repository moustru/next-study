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
			px="100px"
			py="80px"
			borderRadius={56}
			sx={{
				background: bgColor,
			}}
		>
			{achievements.map(({ image, alt, place, text }, index) => (
				<Box w={230} key={image + index}>
					<Flex alignItems="start" gap={4} mb={6}>
						<Heading
							as="h3"
							variant="h1"
							color={
								variant === 'dark' ? 'light.100' : 'grey.600'
							}
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
