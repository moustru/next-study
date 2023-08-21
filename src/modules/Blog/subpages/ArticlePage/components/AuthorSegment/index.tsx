import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import myImageLoader from '@/shared/utils/imageLoader';

import LikeSVG from 'public/icons/like.svg';

type AuthorSegmentModel = {
	author: string;
	authorAvatar: any;
	likes: number;
};

export const AuthorSegment = ({
	author,
	authorAvatar,
	likes,
}: AuthorSegmentModel) => {
	const avatarURL = authorAvatar?.data?.attributes?.url;

	return (
		<Flex justifyContent="space-between" mb={{ md: 0, xs: 8 }}>
			<Flex alignItems="center" gap={4}>
				<Box
					width={8}
					height={8}
					borderRadius="50%"
					position="relative"
					overflow="hidden"
				>
					<Image src={avatarURL} loader={myImageLoader} alt="Author" fill />
				</Box>
				<Text variant={{ md: 'lg', xs: 'md' }}>{author}</Text>
			</Flex>

			<Flex alignItems="center" gap={4}>
				<LikeSVG fill="#E06667" width="30px" />
				<Text color="grey.400" variant={{ md: 'lg', xs: 'sm' }}>
					{likes}
				</Text>
			</Flex>
		</Flex>
	);
};
