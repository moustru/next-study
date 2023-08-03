import {
	Button,
	IconButton,
	Container,
	Flex,
	Heading,
	Tag,
	Text,
	Stack,
	Box,
	Grid,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

import { SectionForm } from '@/modules/Common/sections/SectionForm';
import { MetaInfo } from '@/shared/components/MetaInfo';

import AppStoreSVG from 'public/icons/app_store.svg';
import GooglePlaySVG from 'public/icons/google_play.svg';
import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';
import type { Size } from '@/shared/types/Size';
import type { Variant } from '@/shared/types/Variant';

const tags = ['Frontend', 'Backend', 'Design'];

const images = [
	'/images/case-page/example1.png',
	'/images/case-page/example2.png',
	'/images/case-page/example3.png',
];

type MemberReviewModel = Record<'name' | 'text' | 'imageSrc', string>;

const memberReviews = [
	{
		name: 'Гаврилова Ксения, Project Manager',
		text: '					«Это был непростой проект, нам с командой пришлось пройти через многое, но все наши задумки были реализованы, проект получился действительно хорошим»',
		imageSrc: '/images/reviews/terminatessa.jpg',
	},
	{
		name: 'Скуратов Владислав, Lead iOS',
		text: '«Нам пришлось решить множество нестандартных задач»',
		imageSrc: '/images/reviews/terminatessa.jpg',
	},
];

export const caseItems = [
	{
		title: 'Advocall',
		developType: 'Разработка мобильного приложения',
		description: 'Быстрая юридическая помощь',
		href: '/case-page',
		bgImage: 'mobile.png',
	},
	{
		title: 'dilab',
		developType: 'Разработка web-сервиса',
		description: 'Записывайтесь на прием с комфортом',
		href: '/case-page',
		bgImage: 'desktop.png',
	},
];

type CasesUI = { size: Size; variant: Variant; bgColor: string };

const casesUI: CasesUI[] = [
	{
		size: 'sm',
		variant: 'dark',
		bgColor: 'grey.600',
	},
	{
		size: 'sm',
		variant: 'light',
		bgColor: 'grey.200',
	},
];

const casesArr = caseItems.map((caseItem, i) =>
	Object.assign(caseItem, casesUI[i])
);

const MemberReviewBlock = ({ name, text, imageSrc }: MemberReviewModel) => {
	return (
		<Flex px={10} py={8} backgroundColor="grey.200" borderRadius={32} gap={6}>
			<Box
				minWidth={100}
				width={100}
				height={100}
				position="relative"
				borderRadius="50%"
				overflow="hidden"
			>
				<Image src={imageSrc} alt="Member photo" fill />
			</Box>
			<Box width="fit-content">
				<Text variant="xl" mb={3}>
					{text}
				</Text>
				<Text variant="sm">{name}</Text>
			</Box>
		</Flex>
	);
};

export const CasePage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – кейс" />
			</Head>

			<Container mt={200} mb={180}>
				<Heading as="h1" variant="h1" mb={10}>
					Ботанический сад
				</Heading>
				<Text variant="lg" mb={12}>
					Мобильное приложение для ботанического сада Петра Великого
				</Text>
				<Flex gap={4}>
					{tags.map((tag, i) => (
						<Tag variant="default" key={tag + i}>
							{tag}
						</Tag>
					))}
				</Flex>
			</Container>

			<Container mb={180}>
				<Text variant="xl" mb={20}>
					В приложении имеется: карта навигации внутри сада, квесты и
					экскурсионные маршруты. Созданное мобильное приложение поможет в
					цифровизации Ботанического сада.
				</Text>

				<Text variant="xl">
					Удобная навигация по карте внутри Ботанического сада поможет
					посетителям не потеряться и быстро добраться до нужного им объекта.
					Пользователи смогут в любое время года посмотреть самые красивые
					объекты и растения сада, благодаря готовым экскурсионным маршрутам для
					разных сезонов.{' '}
				</Text>
			</Container>

			<Container mb={180}>
				<Heading as="h2" variant="h2" mb={12}>
					Ссылки на проект
				</Heading>

				<Flex gap={4}>
					<Button variant="dark">Перейти на сайт</Button>

					<IconButton
						width={54}
						icon={<AppStoreSVG fill="#FFF" width="32" />}
						aria-label="App Store"
						variant="dark"
					/>

					<IconButton
						width={54}
						icon={<GooglePlaySVG fill="#FFF" width="32" />}
						aria-label="App Store"
						variant="dark"
					/>
				</Flex>
			</Container>

			<Container mb={180}>
				<Text variant="xl" mb={20}>
					В приложении имеется: карта навигации внутри сада, квесты и
					экскурсионные маршруты. Созданное мобильное приложение поможет в
					цифровизации Ботанического сада.
				</Text>

				<Text variant="xl">
					Удобная навигация по карте внутри Ботанического сада поможет
					посетителям не потеряться и быстро добраться до нужного им объекта.
					Пользователи смогут в любое время года посмотреть самые красивые
					объекты и растения сада, благодаря готовым экскурсионным маршрутам для
					разных сезонов.{' '}
				</Text>
			</Container>

			<Container mb={180}>
				<Flex justifyContent="space-between">
					{images.map((image, i) => (
						<Image
							src={image}
							key={image + i}
							alt={`Example ${i}`}
							width={330}
							height={712}
						/>
					))}
				</Flex>
			</Container>

			<Container mb={180}>
				<Heading as="h2" variant="h2" mb={16}>
					Выводы
				</Heading>
				<Text variant="xl">
					С помощью современных технологий разработали дизайн и спроектировали
					мобильное приложение за 4 месяца
				</Text>
			</Container>

			<SectionTemplate title="Команда проекта">
				<Stack gap={10}>
					{memberReviews.map((memberReview, i) => (
						<MemberReviewBlock {...memberReview} key={memberReview.name + i} />
					))}
				</Stack>
			</SectionTemplate>

			<SectionTemplate title="Похожие проекты" mt={20}>
				<Grid gridTemplateColumns="repeat(2, 1fr)" gap={8}>
					{casesArr.map((caseItem, i) => (
						<CaseBlock {...caseItem} key={caseItem.title + i} />
					))}
				</Grid>
			</SectionTemplate>

			<SectionForm />
		</>
	);
};
