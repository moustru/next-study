import { Container, Grid, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { SectionForm } from '@/modules/Common/sections/SectionForm';
import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { achievements } from '@/modules/Home/sections/SectionAchievements/mocks/SectionAchievements.mocks';
import { AchieveBlock } from '@/shared/components/AchieveBlock/AchieveBlock';
import { CaseBlock } from '@/shared/components/CaseBlock';
import { ContentSteps } from '@/shared/components/ContentSteps';
import { MetaInfo } from '@/shared/components/MetaInfo';

const devSteps = [
	{
		title: 'Консультируем',
		text: 'для понимания ваших потребностей и разработки наилучшего решения для вашего бизнеса',
	},
	{
		title: 'Анализируем',
		text: 'для идентификации возможностей оптимизации и автоматизации ваших бизнес-процессов',
	},
	{
		title: 'Создаем',
		text: 'для создания детального технического задания, которое будет основой для разработки',
	},
	{
		title: 'Разрабатываем',
		text: 'для создания высококачественного программного продукта, соответствующего вашим требованиям',
	},
];

export const caseItems = [
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

export const ServicePage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Услуга" />
			</Head>

			<Container
				mt={{ md: 200, xs: 120 }}
				mb={{ lg: 180, md: '80px', xs: '40px' }}
			>
				<Heading as="h1" variant="h1" mb={{ lg: 12, md: 8, xs: 4 }}>
					Мобильные приложения
				</Heading>
				<Text variant="xl" maxW={{ lg: 900, xs: 'auto' }}>
					Создаем приложения на основе inhome библиотек, что позволяет сократить
					время и повысить качество разработки
				</Text>
			</Container>

			<Container mb={{ lg: 180, md: 120, xs: '40px' }}>
				<AchieveBlock
					achievements={achievements}
					bgColor="linear-gradient(90deg, var(--chakra-colors-light-100) 40%, var(--chakra-colors-basic-100) 100%);"
					variant="light"
				/>
			</Container>

			<SectionTemplate title="Этапы разработки">
				<ContentSteps steps={devSteps} />
			</SectionTemplate>

			<SectionTemplate title="Примеры кейсов">
				<Grid
					gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
					gap={8}
				>
					<CaseBlock
						{...caseItems[0]}
						bgColor="grey.200"
						size="sm"
						key={caseItems[0].title}
					/>
					<CaseBlock
						{...caseItems[1]}
						bgColor="grey.600"
						size="sm"
						variant="dark"
						key={caseItems[1].title}
					/>
				</Grid>
			</SectionTemplate>

			<SectionForm />
		</>
	);
};
