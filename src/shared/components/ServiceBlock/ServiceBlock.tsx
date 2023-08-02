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
		<Stack
			justifyContent="space-between"
			gap={0}
			bgColor="light.100"
			borderRadius={44}
			px="60px"
			py="80px"
		>
			<Stack gap={0}>
				<Text variant="sm" mb={4}>
					{label}
				</Text>
				<Heading as="h2" variant="h2" mb={8}>
					{title}
				</Heading>
				<Flex gap={4} mb={25}>
					{tags.map((tag, i) => (
						<Tag key={tag + i} size="sm" variant="default">
							{tag}
						</Tag>
					))}
				</Flex>
			</Stack>
			{/* <Link href={href}> */}
			<Link href="/service-page">
				<ArrowSVG fill="#26282B" width="60px" />
			</Link>
		</Stack>
	);
};
