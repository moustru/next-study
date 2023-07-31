import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CustomIcon } from '@/shared/components/CustomIcon';
import { Box, Text, Heading, Stack, Button } from '@chakra-ui/react';

const caseItems = [
	{
		title: 'Advocall',
		developType: 'Разработка мобильного приложения',
		description: 'Быстрая юридическая помощь',
		href: '#',
		bgImage: 'mobile.png',
	},
	{
		title: 'dilab',
		developType: 'Разработка web-сервиса',
		description: 'Записывайтесь на прием с комфортом',
		href: '#',
		bgImage: 'desktop.png',
	},
];

type CaseBannerProps = Record<
	'title' | 'developType' | 'description' | 'href' | 'bgImage',
	string
>;

const CaseBanner = ({
	title,
	developType,
	description,
	href,
	bgImage,
}: CaseBannerProps) => {
	return (
		<Box
			h={460}
			bgImage={`/images/cases/${bgImage}`}
			bgRepeat="no-repeat"
			bgColor="light.200"
			bgPosition="bottom right"
			borderRadius={56}
			px="100px"
			py="80px"
		>
			<Text variant="sm" mb={8}>
				{developType}
			</Text>
			<Heading as="h3" variant="h2" mb={4}>
				{title}
			</Heading>
			<Text variant="md" mb={16}>
				{description}
			</Text>
			<CustomIcon icon="arrow_right" width={60} />
		</Box>
	);
};

export const SectionCases = ({ ...others }) => {
	return (
		<SectionTemplate title="Кейсы" {...others}>
			<>
				<Stack gap={100} mb="60px">
					{caseItems.map((caseItem, i) => (
						<CaseBanner {...caseItem} key={caseItem.title + i} />
					))}
				</Stack>
				<Button
					float="right"
					rightIcon={<CustomIcon icon="arrow_right" />}
					variant="ghost"
				>
					Ко всем кейсам
				</Button>
			</>
		</SectionTemplate>
	);
};
