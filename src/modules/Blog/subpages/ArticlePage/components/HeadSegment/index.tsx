import { Flex, Text, Tag } from '@chakra-ui/react';

import type { TagModel } from '@/shared/types/Tag';

type HeadSegmentModel = {
	tags: TagModel[];
	publicationDate: string;
};

export const HeadSegment = ({ tags, publicationDate }: HeadSegmentModel) => {
	const formattedDate = new Date(publicationDate)
		.toLocaleDateString('ru-RU', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		})
		.replace(' г.', '');

	return (
		<Flex
			justifyContent="space-between"
			direction={{ md: 'row', xs: 'column' }}
			gap={{ md: 0, xs: 4 }}
			mb={{ md: 8, xs: 4 }}
		>
			<Flex maxWidth="80%" gap={4}>
				{tags.map((tag) => (
					<Tag variant="default" key={tag.id}>
						{tag.value}
					</Tag>
				))}
			</Flex>
			<Text variant="sm">{formattedDate}</Text>
		</Flex>
	);
};
