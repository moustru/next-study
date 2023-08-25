import { Box, Flex, Text } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';

import myImageLoader from '@/shared/utils/imageLoader';

import { setLikePostState } from '../../api/like';
import { useLikesStorage } from '../../lib/likesStorage';

import LikeSVG from 'public/icons/like.svg';

type AuthorSegmentModel = {
	articleId: number;
	author: string;
	authorAvatar: any;
	likes: number;
};

export const AuthorSegment = ({
	articleId,
	author,
	authorAvatar,
	likes,
}: AuthorSegmentModel) => {
	const avatarURL = authorAvatar?.data?.attributes?.url;
	let [likesState, setLikes] = useState(likes);

	const { handle: handleStorage, isAlreadyLiked } = useLikesStorage();

	const { mutate: setLikeStateOnStrapi } = useMutation(setLikePostState, {
		onSuccess: (data) => {
			handleStorage(articleId);
			setLikes(data.data.attributes.likes);
		},
	});

	const handleLikePost = async () => {
		const type = isAlreadyLiked(articleId) ? 'remove' : 'add';

		const getLikes = () => {
			switch (type) {
				case 'add':
					return likesState + 1;
				case 'remove':
					return likesState - 1;
			}
		};

		await setLikeStateOnStrapi({ articleId, likes: getLikes() });
	};

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

			<Flex
				alignItems="center"
				gap={4}
				onClick={handleLikePost}
				cursor="pointer"
			>
				<LikeSVG fill="#E06667" width="30px" />
				<Text color="grey.400" variant={{ md: 'lg', xs: 'sm' }}>
					{likesState}
				</Text>
			</Flex>
		</Flex>
	);
};
