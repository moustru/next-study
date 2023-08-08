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
			align={{ base: 'flex-start', md: 'center' }}
			direction={{ base: 'row', md: 'column' }}
			bgColor="light.100"
			px={{ base: '48px', md: '32px' }}
			py={{ base: '40px', md: '32px' }}
			h={{ base: 344, md: 'auto' }}
			gap={{ base: 12, md: 6 }}
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
