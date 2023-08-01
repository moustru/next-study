import { Box, Flex, Stack, Tag, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const CustomAvatar = () => {
	return (
		<Stack gap={0} maxW={230} align="center">
			<Box w={230} h={230} borderRadius="50%" position="relative" mb={6}>
				<Image src="/images/reviews/terminatessa.jpg" alt="Avatar img" fill />
			</Box>
			<Text variant="md" mb={4}>
				Кэмерон Дэвис
			</Text>
			<Flex gap={3}>
				<Tag variant="default" size="sm">
					Frontend
				</Tag>
				<Tag variant="default" size="sm">
					Backend
				</Tag>
			</Flex>
		</Stack>
	);
};
