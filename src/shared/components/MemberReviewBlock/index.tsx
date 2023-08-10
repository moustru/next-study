import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

type MemberReviewModel = Record<'name' | 'text' | 'imageSrc', string>;

export const MemberReviewBlock = ({
	name,
	text,
	imageSrc,
}: MemberReviewModel) => {
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
				minWidth={100}
				width={100}
				height={100}
				position="relative"
				borderRadius="50%"
				overflow="hidden"
			>
				<Image src={imageSrc} alt="Member photo" fill />
			</Box>
			<Box width="fit-content">
				<Text variant="xl" mb={3}>
					{text}
				</Text>
				<Text variant="sm">{name}</Text>
			</Box>
		</Flex>
	);
};
