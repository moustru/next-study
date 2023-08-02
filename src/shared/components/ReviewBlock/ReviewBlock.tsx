import { Divider, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

type ReviewBlockModel = Record<
	'user' | 'company' | 'avatar' | 'reviewText',
	string
>;

export const ReviewBlock = ({
	user,
	company,
	avatar,
	reviewText,
}: ReviewBlockModel) => {
	return (
		<Flex
			bgColor="light.100"
			px="48px"
			py="40px"
			h={344}
			gap={12}
			borderRadius={32}
		>
			<Text variant="xl">{reviewText}</Text>
			<Divider orientation="vertical" />
			<Stack minW={185}>
				<Image
					src={`/images/reviews/${avatar}`}
					alt="Terminatessa"
					width={180}
					height={180}
				/>
				<Text variant="md" mt={4}>
					{user}
				</Text>
				<Text variant="md">{company}</Text>
			</Stack>
		</Flex>
	);
};
