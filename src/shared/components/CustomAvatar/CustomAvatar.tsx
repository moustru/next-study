import { Box, Flex, Stack, Tag, Text } from '@chakra-ui/react';
import Image from 'next/image';

type CustomAvatarModel = {
	name: string;
	imageSrc: string;
	tags: string[];
};

export const CustomAvatar = ({ name, imageSrc, tags }: CustomAvatarModel) => {
	return (
		<Stack gap={0} maxW={230} align="center">
			<Box
				w={230}
				h={230}
				borderRadius="50%"
				overflow="hidden"
				position="relative"
				mb={6}
			>
				<Image src={imageSrc} alt="Avatar img" fill />
			</Box>
			<Text variant="md" mb={4}>
				{name}
			</Text>
			<Flex gap={3}>
				{tags.map((tag, i) => (
					<Tag variant="default" size="sm" key={tag + i}>
						{tag}
					</Tag>
				))}
			</Flex>
		</Stack>
	);
};
