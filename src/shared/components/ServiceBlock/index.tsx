import { Box, Flex, Heading, Stack, Tag, Text } from '@chakra-ui/react';
import Link from 'next/link';

import type { TagModel } from '@/shared/types/Tag';

import ArrowSVG from 'public/icons/arrow_right.svg';

type ServiceBlockModel = {
	id: number;
	label: string;
	title: string;
	tags: TagModel[];
};

export const ServiceBlock = ({ id, label, title, tags }: ServiceBlockModel) => {
	return (
		<Link href={`/services/${id}`}>
			<Stack
				h={{ lg: 425, md: 300, xs: 200 }}
				justifyContent="space-between"
				gap={0}
				bgColor="light.100"
				borderRadius={{ md: 44, xs: 20 }}
				px={{ lg: '80px', md: '48px', xs: '24px' }}
				py={{ lg: '60px', md: '40px', xs: '20px' }}
			>
				<Stack gap={0}>
					<Text variant="sm" mb={4}>
						{label}
					</Text>
					<Heading as="h2" variant="h2" mb={{ md: 8, xs: 4 }}>
						{title}
					</Heading>
					<Flex gap={4} mb={{ md: 25, xs: '12px' }}>
						{tags.map((tag) => (
							<Tag key={tag.id} size="sm" variant="default">
								{tag.value}
							</Tag>
						))}
					</Flex>
				</Stack>
				<Box w={{ xs: '32px', md: '60px' }}>
					<ArrowSVG fill="#26282B" width="100%" />
				</Box>
			</Stack>
		</Link>
	);
};
