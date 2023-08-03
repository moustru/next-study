import { Flex, Text, Tag } from '@chakra-ui/react';

type HeadSegmentModel = {
	tags: string[];
	date: string;
};

export const HeadSegment = ({ tags, date }: HeadSegmentModel) => {
	return (
		<Flex justifyContent="space-between" mb={8}>
			<Flex maxWidth="80%" gap={4}>
				{tags.map((tag, i) => (
					<Tag variant="default" key={tag + i}>
						{tag}
					</Tag>
				))}
			</Flex>
			<Text variant="sm">{date}</Text>
		</Flex>
	);
};
