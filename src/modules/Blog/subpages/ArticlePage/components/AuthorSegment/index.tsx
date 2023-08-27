import { Box, Flex, Text } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';

import myImageLoader from '@/shared/utils/imageLoader';

import { setLikePostState } from '../../api/like';
import { useLikesStorage } from '../../lib/likesStorage';

import { LikeButton } from './LikeButton';

const DynamicLikeButton: any = dynamic(() => Promise.resolve(LikeButton), {
	ssr: false,
});

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
			<DynamicLikeButton
				onClick={handleLikePost}
				likesState={likesState}
				articleId={articleId}
				isAlreadyLiked={isAlreadyLiked}
			/>
		</Flex>
	);
};
