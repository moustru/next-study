import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

type TeamSingleModel = {
	avatar: string;
	position: string;
	review: string;
};

export const MemberReviewBlock = ({
	avatar,
	position,
	review,
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
				<Image
					src={avatar || '/images/reviews/terminatessa.jpg'}
					alt="Member photo"
					fill
				/>
			</Box>
			<Box width="fit-content">
				<Text variant="xl" mb={3}>
					{review}
				</Text>
				<Text variant="sm">{position}</Text>
			</Box>
		</Flex>
	);
};
