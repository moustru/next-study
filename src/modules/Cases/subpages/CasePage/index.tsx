import { SectionForm } from '@/modules/Common/sections/SectionForm';
import { MetaInfo } from '@/shared/components/MetaInfo';
import {
	Button,
	IconButton,
	Container,
	Flex,
	Heading,
	Tag,
	Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

import AppStoreSVG from 'public/icons/app_store.svg';
import GooglePlaySVG from 'public/icons/google_play.svg';

const tags = ['Frontend', 'Backend', 'Design'];

const images = [
	'/images/case-page/example1.png',
	'/images/case-page/example2.png',
	'/images/case-page/example3.png',
];

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

			<SectionForm />
		</>
	);
};
