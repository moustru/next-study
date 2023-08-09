import { Box, Flex, Grid, Heading, Stack, Tag, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { MetaInfo } from '@/shared/components/MetaInfo';

import { SectionForm } from '../Common/sections/SectionForm';
import { SectionTemplate } from '../Common/sections/SectionTemplate';

import ArrowSVG from 'public/icons/arrow_right.svg';
import LikeSVG from 'public/icons/like.svg';

type BlogBlockModel = {
	subText?: string;
	title?: string;
	tags?: string[];
	href?: string;
};

export const BlogBlock = ({
	title = 'Название статьи возможно длинное',
	tags = ['Мобильная разработка'],
	subText = 'Необльшое описание или что-то в этом духе',
	href,
}: BlogBlockModel) => {
	return (
		<Stack
			justifyContent="space-between"
			gap={0}
			bgColor="light.100"
			borderRadius={{ md: 44, xs: 20 }}
			px={{ lg: '80px', xs: '32px' }}
			py={{ lg: '60px', xs: '24px' }}
		>
			<Stack gap={0} mb={{ lg: 12, xs: 4 }}>
				<Flex gap={4} mb={5}>
					{tags.map((tag, i) => (
						<Tag key={tag + i} size="sm" variant="default">
							{tag}
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
							<Image src="/images/reviews/terminatessa.jpg" alt="Author" fill />
						</Box>
						<Text variant="xs">Ефименко Георгий, Head</Text>
					</Flex>

					<Flex gap={6}>
						<Text color="grey.400">28.07.2023</Text>

						<Flex alignItems="center" gap={1}>
							<LikeSVG fill="#787D87" width="16px" />
							<Text color="grey.400">22</Text>
						</Flex>
					</Flex>
				</Box>
			</Stack>
			{/* <Link href={href}> */}
			<Link href="/article-page">
				<ArrowSVG fill="#26282B" width="60px" />
			</Link>
		</Stack>
	);
};

export const BlogPage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – блог" />
			</Head>

			<SectionTemplate title="Блог" firstBlock>
				<Grid
					gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
					gap={{ md: 8, xs: 4 }}
				>
					<BlogBlock />
					<BlogBlock />
				</Grid>
			</SectionTemplate>
			<SectionForm />
		</>
	);
};
