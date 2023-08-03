import { MetaInfo } from '@/shared/components/MetaInfo';
import Head from 'next/head';
import { SectionForm } from '../Common/sections/SectionForm';
import { Box, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import { SectionTemplate } from '../Common/sections/SectionTemplate';
import { CustomAvatar } from '@/shared/components/CustomAvatar';
import Image from 'next/image';

type RoadStepModel = {
	year: number;
	milestones: string[];
};

const RoadStep = ({ year, milestones }: RoadStepModel) => {
	return (
		<Box>
			<Flex alignItems="center" mb={12}>
				<Box
					width={6}
					height={6}
					borderRadius="50%"
					backgroundColor="basic.200"
				/>

				<Box width="100%" height="2px" backgroundColor="basic.200" />
			</Flex>

			<Heading as="h3" variant="h3" color="basic.200" mb={6}>
				{year}
			</Heading>
			{milestones.map((milestone, i) => (
				<Text variant="lg" key={milestone + i} paddingRight="20px">
					{milestone}
				</Text>
			))}
		</Box>
	);
};

const roadSteps = [
	{
		year: 2020,
		milestones: ['Сделали то', 'Сделали это', 'Ну и вот это тоже сделали'],
	},
	{
		year: 2021,
		milestones: ['Сделали то', 'Сделали это', 'Ну и вот это тоже сделали'],
	},
	{
		year: 2022,
		milestones: ['Сделали то', 'Сделали это', 'Ну и вот это тоже сделали'],
	},
	{
		year: 2023,
		milestones: ['Сделали то', 'Сделали это', 'Ну и вот это тоже сделали'],
	},
];

const team = [
	{
		name: 'Ефименко Георгий',
		tags: ['Head', 'iOS'],
		imageSrc: '/images/reviews/terminatessa.jpg',
	},
	{
		name: 'Ефименко Георгий',
		tags: ['Project Manager', 'QA'],
		imageSrc: '/images/reviews/terminatessa.jpg',
	},
	{
		name: 'Ефименко Георгий',
		tags: ['QA'],
		imageSrc: '/images/reviews/terminatessa.jpg',
	},
	{
		name: 'Ефименко Георгий',
		tags: ['Frontend'],
		imageSrc: '/images/reviews/terminatessa.jpg',
	},
];

export const AboutPage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – о нас" />
			</Head>

			<Box mt={200} mb={120} backgroundColor="grey.600">
				<Box maxWidth={1440} m="0 auto" p="60px">
					<Heading as="h1" variant="h1" color="grey.100" mb={12}>
						Наша&nbsp;
						<Text color="basic.200" display="inline-block">
							миссия
						</Text>
					</Heading>
					<Text variant="xl" color="grey.100" maxWidth="70%">
						Создаем уникальные сервисы и приложения для IT-индустрии на базе
						СПбГЭТУ ЛЭТИ с командой из более чем 30 специалистов с собственным
						R&D отделом. Создаем уникальные сервисы и приложения для
						IT-индустрии на базе СПбГЭТУ ЛЭТИ с командой из более чем 30
						специалистов с собственным R&D отделом. Создаем уникальные сервисы и
						приложения для IT-индустрии на базе СПбГЭТУ ЛЭТИ с командой из более
						чем 30 специалистов с собственным R&D отделом. Создаем уникальные
						сервисы и приложения для IT-индустрии на базе{' '}
					</Text>
				</Box>
			</Box>

			<SectionTemplate title="История лаборатории">
				<Grid gridTemplateColumns={`repeat(${roadSteps.length}, 1fr)`}>
					{roadSteps.map((step, i) => (
						<RoadStep {...step} key={step.year + i} />
					))}
				</Grid>
			</SectionTemplate>

			<SectionTemplate title="Команда">
				<Flex gap={16}>
					{team.map((teamMember, i) => (
						<CustomAvatar {...teamMember} key={teamMember.name + i} />
					))}
				</Flex>
			</SectionTemplate>

			<SectionTemplate title="Контакты" mb="100px">
				<Stack>
					<Flex justifyContent="space-between">
						<Text variant="xl" maxW={350}>
							г. Санкт-Петербург, ул. Профессора Попова, 5
						</Text>

						<Flex gap={14}>
							<Text variant="xl">+7 (999) 201-85-87</Text>
							<Text variant="xl">vibelab@etu.ru</Text>
						</Flex>
					</Flex>
				</Stack>
			</SectionTemplate>

			<Box width="100%" height={632} position="relative" mb={180}>
				<Image src="/images/about/map.png" alt="Map" fill />
			</Box>

			<SectionForm />
		</>
	);
};
