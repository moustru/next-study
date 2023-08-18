import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	IconButton,
	Text,
	useMediaQuery,
} from '@chakra-ui/react';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

import { images } from './mocks';

import AppStoreSVG from 'public/icons/app_store.svg';
import GooglePlaySVG from 'public/icons/google_play.svg';

export const SectionDescription = () => {
	const [largerThan768] = useMediaQuery('(min-width: 768px)');

	return (
		<>
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
					разных сезонов.
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
				{largerThan768 ? (
					<Flex justifyContent="space-between">
						{images.map((image, i) => (
							<Box
								key={image + i}
								position="relative"
								w={{ xs: '100%', md: 330 }}
								h={{ xs: 150, md: 330 }}
							>
								<Image src={image} alt={`Example ${i}`} fill />
							</Box>
						))}
					</Flex>
				) : (
					<Carousel slideGap={16} slideSize="100%">
						{images.map((image, i) => (
							<Carousel.Slide key={image + i}>
								<Box
									position="relative"
									w={{ xs: '100%', md: 330 }}
									h={{ xs: 150, md: 330 }}
								>
									<Image src={image} alt={`Example ${i}`} fill />
								</Box>
							</Carousel.Slide>
						))}
					</Carousel>
				)}
			</Container>
		</>
	);
};
