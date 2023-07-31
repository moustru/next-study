import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import styles from './index.module.css';
import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';

const achievements = [
	{
		image: 'medal.png',
		place: 3,
		text: 'топ России по версии НТИ',
		alt: 'Medal',
	},
	{ image: 'cup.png', place: 15, text: 'топ России по версии НТИ', alt: 'Cup' },
	{
		image: 'rocket.png',
		place: 5,
		text: 'топ России по версии НТИ',
		alt: 'Rocket',
	},
];

export const SectionAchievements = ({ ...others }) => {
	return (
		<SectionTemplate {...others}>
			<Flex
				className={styles.achievements}
				justify="space-between"
				px="100px"
				py="80px"
				borderRadius={56}
			>
				{achievements.map(({ image, alt, place, text }, index) => (
					<Box w={230}>
						<Flex alignItems="start" gap={4} mb={6}>
							<Heading as="h3" variant="h1" color="light.100">
								#{place}
							</Heading>
							<Image
								src={`/images/achievements/${image}`}
								alt={alt}
								width={56}
								height={56}
								key={alt + index}
							/>
						</Flex>
						<Text color="light.100" variant="md">
							{text}
						</Text>
					</Box>
				))}
			</Flex>
		</SectionTemplate>
	);
};
