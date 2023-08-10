import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import LikeSVG from 'public/icons/like.svg';

type AuthorSegmentModel = {
	name: string;
	imageSrc: string;
	likes: number;
};

export const AuthorSegment = ({
	name,
	imageSrc,
	likes,
}: AuthorSegmentModel) => {
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
					<Image src={imageSrc} alt="Author" fill />
				</Box>
				<Text variant={{ md: 'lg', xs: 'md' }}>{name}</Text>
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
