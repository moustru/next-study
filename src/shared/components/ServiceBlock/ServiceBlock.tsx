import { Flex, Heading, Stack, Tag, Text } from '@chakra-ui/react';
import Link from 'next/link';

import ArrowSVG from 'public/icons/arrow_right.svg';

type ServiceBlockModel = {
	label: string;
	title: string;
	tags: string[];
	href: string;
};

export const ServiceBlock = ({
	label,
	title,
	tags,
	href,
}: ServiceBlockModel) => {
	return (
		<Link href={href}>
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
						{tags.map((tag, i) => (
							<Tag key={tag + i} size="sm" variant="default">
								{tag}
							</Tag>
						))}
					</Flex>
				</Stack>
				<ArrowSVG fill="#26282B" width="60px" />
			</Stack>
		</Link>
	);
};
