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
		<Flex justifyContent="space-between">
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
				<Text variant="lg">{name}</Text>
			</Flex>

			<Flex alignItems="center" gap={4}>
				<LikeSVG fill="#E06667" width="30px" />
				<Text color="grey.400" variant="lg">
					{likes}
				</Text>
			</Flex>
		</Flex>
	);
};
