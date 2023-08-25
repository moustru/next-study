import { Box, Flex, Heading, Stack, Tag, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { TagModel } from '@/shared/types/Tag';
import myImageLoader from '@/shared/utils/imageLoader';

import { MovingArrow } from '../MovingArrow';

import type { Url } from 'next/dist/shared/lib/router/router';

import LikeSVG from 'public/icons/like.svg';

type BlogBlockModel = {
	subText?: string;
	title?: string;
	tags: TagModel[];
	date: string;
	author: string;
	authorAvatar: any;
	href: Url;
	likes: number;
};

export const ArticleBlock = ({
	title,
	tags,
	subText,
	href,
	date,
	author,
	authorAvatar,
	likes,
}: BlogBlockModel) => {
	const [hovered, setHovered] = useState(false);
	const hoverHandler = () => setHovered(!hovered);

	const authorAvatarURL = authorAvatar.data.attributes.url;

	return (
		<Link
			style={{
				position: 'relative',
			}}
			href={href}
			onMouseEnter={hoverHandler}
			onMouseLeave={hoverHandler}
		>
			<motion.div
				transition={{
					duration: 0.3,
				}}
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<Stack
					justifyContent="space-between"
					gap={0}
					height="100%"
					bgColor="light.100"
					borderRadius={{ md: 44, xs: 20 }}
					px={{ lg: '80px', xs: '32px' }}
					py={{ lg: '60px', xs: '24px' }}
				>
					<Stack gap={0} mb={{ lg: 12, xs: 4 }}>
						<Flex gap={4} mb={5}>
							{tags.map((tag) => (
								<Tag key={tag.value} size="sm" variant="default">
									{tag.value}
								</Tag>
							))}
						</Flex>
						<Heading as="h3" variant="h3" mb={2.5}>
							{title}
						</Heading>
						<Text variant="sm" mb={{ md: 7, xs: 4 }}>
							{subText}
						</Text>

						<Box>
							<Flex gap={2} mb={4}>
								<Box
									width={5}
									height={5}
									borderRadius="50%"
									position="relative"
									overflow="hidden"
								>
									<Image
										src={authorAvatarURL}
										loader={myImageLoader}
										alt="Author"
										fill
									/>
								</Box>
								<Text variant="xs">{author}</Text>
							</Flex>

							<Flex gap={6}>
								<Text color="grey.400">{date}</Text>

								<Flex alignItems="center" gap={1}>
									<LikeSVG fill="#787D87" width="16px" />
									<Text color="grey.400">{likes}</Text>
								</Flex>
							</Flex>
						</Box>
					</Stack>
					<MovingArrow isHoverOnParent={hovered} />
				</Stack>
			</motion.div>
		</Link>
	);
};
