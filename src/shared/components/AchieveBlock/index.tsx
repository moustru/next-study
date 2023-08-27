import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import htmlParser from 'html-react-parser';
import Image from 'next/image';

import { AchievementModel } from '@/shared/types/Achievement';
import myImageLoader from '@/shared/utils/imageLoader';

import type { Variant } from '@/shared/types/Variant';

type AchieveBlockModel = {
	achievements: AchievementModel[];
	variant: Variant;
};

const setBgColor = (variant: Variant) => {
	switch (variant) {
		case 'light':
			return 'linear-gradient(90deg, var(--chakra-colors-light-100) 40%, var(--chakra-colors-basic-100) 100%);';
		case 'dark':
		default:
			return 'radial-gradient(73.54% 315.43% at 0% 200.16%, #0F5AEF 0%, #26282B 100%)';
	}
};

export const AchieveBlock = ({ achievements, variant }: AchieveBlockModel) => {
	return (
		<Flex
			justify="space-between"
			direction={{ lg: 'row', xs: 'column' }}
			px={{ lg: '100px', sm: '64px', xs: '32px' }}
			py={{ lg: '80px', sm: '48px', xs: '24px' }}
			gap={{ lg: 0, sm: 6, xs: 12 }}
			borderRadius={{ md: 56, xs: 28 }}
			sx={{
				background: setBgColor(variant),
			}}
		>
			{achievements?.map((achieve) => (
				<Box w={{ lg: 230, sm: '100%' }} key={achieve.id}>
					<Flex alignItems="center" gap={4} mb={{ lg: 6, sm: 2 }}>
						<Heading
							as="h3"
							variant="h1"
							color={variant === 'dark' ? 'grey.50' : 'grey.600'}
						>
							#{achieve.place}
						</Heading>

						<Box
							position="relative"
							width={{ xs: '10vw', md: '56px' }}
							height={{ xs: '10vw', md: '56px' }}
						>
							<Image
								src={achieve?.icon?.data?.attributes?.url}
								loader={myImageLoader}
								alt="Achieve icon"
								fill
							/>
						</Box>
					</Flex>
					<Text
						color={variant === 'dark' ? 'grey.50' : 'grey.600'}
						variant="md"
					>
						{htmlParser(achieve.description)}
					</Text>
				</Box>
			))}
		</Flex>
	);
};
