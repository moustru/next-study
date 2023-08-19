import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import myImageLoader from '@/shared/utils/imageLoader';

type TeamSingleModel = {
	avatarSrc: string;
	nameAndPosition: string;
	reviewText: string;
};

export const MemberReviewBlock = ({
	avatarSrc,
	nameAndPosition,
	reviewText,
}: TeamSingleModel) => {
	return (
		<Flex
			px={{ md: 10, xs: 6 }}
			py={{ md: 8, xs: 6 }}
			direction={{ md: 'row', xs: 'column' }}
			backgroundColor="grey.200"
			borderRadius={{ md: 32, xs: 20 }}
			gap={6}
		>
			<Box
				minWidth={{ xs: '48px', md: '100px' }}
				width={{ xs: '48px', md: '100px' }}
				height={{ xs: '48px', md: '100px' }}
				position="relative"
				borderRadius="50%"
				overflow="hidden"
			>
				<Image src={avatarSrc} loader={myImageLoader} alt="Member photo" fill />
			</Box>
			<Box width="fit-content">
				<Text variant="xl" mb={3}>
					{reviewText}
				</Text>
				<Text variant="sm">{nameAndPosition}</Text>
			</Box>
		</Flex>
	);
};
