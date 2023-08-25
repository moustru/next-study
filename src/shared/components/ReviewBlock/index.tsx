import { Box, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import myImageLoader from '@/shared/utils/imageLoader';

type ReviewBlockModel = {
	reviewText: string;
	reviewAuthor: string;
	avatar: any;
	authorCompany: string;
};

export const ReviewBlock = ({
	reviewAuthor,
	authorCompany,
	avatar,
	reviewText,
}: ReviewBlockModel) => {
	const avatarURL = avatar?.data?.attributes?.url;

	return (
		<Flex
			align={{ lg: 'flex-start', xs: 'center' }}
			direction={{ lg: 'row', xs: 'column' }}
			bgColor="light.100"
			h={{ lg: 344, xs: 'auto' }}
			px={{ lg: '48px', xs: '32px' }}
			py={{ lg: '40px', xs: '32px' }}
			gap={{ lg: 12, md: 6, xs: 4 }}
			borderRadius={{ md: 32, xs: 20 }}
		>
			<Text variant={{ lg: 'xl', sm: 'md', xs: 'sm' }}>{reviewText}</Text>
			<Divider orientation="vertical" />
			<Stack minW={185} spacing={4} align={{ xs: 'center', lg: 'start' }}>
				<Box
					position="relative"
					w={{ xs: '20vw', md: '180px' }}
					h={{ xs: '20vw', md: '180px' }}
				>
					<Image
						src={avatarURL}
						loader={myImageLoader}
						alt="Terminatessa"
						fill
					/>
				</Box>
				<Stack spacing={0}>
					<Text variant="md">{reviewAuthor}</Text>
					<Text variant="md">{authorCompany}</Text>
				</Stack>
			</Stack>
		</Flex>
	);
};
