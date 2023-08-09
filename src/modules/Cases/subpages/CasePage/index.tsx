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
import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';
import { MetaInfo } from '@/shared/components/MetaInfo';

import type { Size } from '@/shared/types/Size';
import type { Variant } from '@/shared/types/Variant';

import AppStoreSVG from 'public/icons/app_store.svg';
import GooglePlaySVG from 'public/icons/google_play.svg';

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
		<Flex
			px={{ md: 10, xs: 6 }}
			py={{ md: 8, xs: 6 }}
			direction={{ md: 'row', xs: 'column' }}
			backgroundColor="grey.200"
			borderRadius={{ md: 32, xs: 20 }}
			gap={6}
		>
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

			<Container
				mt={{ md: 200, xs: 120 }}
				mb={{ lg: 180, sm: '80px', xs: '40px' }}
			>
				<Heading as="h1" variant="h1" mb={{ lg: 10, xs: 6 }}>
					Ботанический сад
				</Heading>
				<Text variant="lg" mb={{ lg: 12, xs: 6 }}>
					Мобильное приложение для ботанического сада Петра Великого
				</Text>
				<Flex gap={{ md: 4, xs: 2 }}>
					{tags.map((tag, i) => (
						<Tag variant="default" key={tag + i}>
							{tag}
						</Tag>
					))}
				</Flex>
			</Container>

			<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
				<Text variant="xl" mb={{ lg: 20, md: 10, xs: 8 }}>
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

			<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
				<Heading as="h2" variant="h2" mb={{ lg: 12, md: 6, xs: 4 }}>
					Ссылки на проект
				</Heading>

				<Flex gap={{ md: 4, xs: 2 }}>
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

			<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
				<Text variant="xl" mb={{ lg: 20, md: 10, xs: 8 }}>
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

			<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
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

			<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
				<Heading as="h2" variant="h2" mb={{ lg: 16, md: 8, xs: 4 }}>
					Выводы
				</Heading>
				<Text variant="xl">
					С помощью современных технологий разработали дизайн и спроектировали
					мобильное приложение за 4 месяца
				</Text>
			</Container>

			<SectionTemplate title="Команда проекта">
				<Stack gap={{ lg: 10, xs: 5 }}>
					{memberReviews.map((memberReview, i) => (
						<MemberReviewBlock {...memberReview} key={memberReview.name + i} />
					))}
				</Stack>
			</SectionTemplate>

			<SectionTemplate title="Похожие проекты">
				<Grid
					gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
					gap={8}
				>
					{casesArr.map((caseItem, i) => (
						<CaseBlock {...caseItem} key={caseItem.title + i} />
					))}
				</Grid>
			</SectionTemplate>

			<SectionForm />
		</>
	);
};
