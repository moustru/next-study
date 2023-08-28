import { Box, Flex, Stack, Tag, Text } from '@chakra-ui/react';
import Image from 'next/image';

import myImageLoader from '@/shared/utils/imageLoader';

import type { TagModel } from '@/shared/types/Tag';

type CustomAvatarModel = {
	avatar: any;
	name: string;
	tags: TagModel[];
};

export const CustomAvatar = ({
	name,
	avatar,
	tags,
	...others
}: CustomAvatarModel) => {
	const avatarURL = avatar.data.attributes.url;

	return (
		<Stack
			gap={0}
			maxW={230}
			align="center"
			minW={{ md: 'none', xs: '100%' }}
			{...others}
		>
			<Box
				w={{ xs: '30vw', sm: '20vw', md: '17vw' }}
				h={{ xs: '30vw', sm: '20vw', md: '17vw' }}
				maxW={234}
				maxH={234}
				borderRadius="50%"
				overflow="hidden"
				position="relative"
				mb={6}
			>
				<Image src={avatarURL} loader={myImageLoader} alt="Avatar img" fill />
			</Box>
			<Text variant="md" mb={4}>
				{name}
			</Text>
			<Flex gap={3}>
				{tags.map((tag) => (
					<Tag variant="default" size="sm" key={tag.id}>
						{tag.value}
					</Tag>
				))}
			</Flex>
		</Stack>
	);
};
