import { Box, Divider, Flex, Stack, Text } from '@chakra-ui/react';
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
			align={{ lg: 'flex-start', xs: 'center' }}
			direction={{ lg: 'row', xs: 'column' }}
			bgColor="light.100"
			px={{ lg: '48px', xs: '32px' }}
			py={{ lg: '40px', xs: '32px' }}
			gap={{ lg: 12, md: 6, xs: 4 }}
			borderRadius={{ md: 32, xs: 20 }}
		>
			<Text variant={{ lg: 'xl', sm: 'md', xs: 'sm' }}>{reviewText}</Text>
			<Divider orientation="vertical" />
			<Stack minW={185} align={{ xs: 'center', lg: 'left' }}>
				<Box
					position="relative"
					w={{ xs: '20vw', md: '180px' }}
					h={{ xs: '20vw', md: '180px' }}
				>
					<Image src={`/images/reviews/${avatar}`} alt="Terminatessa" fill />
				</Box>
				<Text variant="md" mt={4}>
					{user}
				</Text>
				<Text variant="md">{company}</Text>
			</Stack>
		</Flex>
	);
};
