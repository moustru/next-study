import { Container, Heading, Text } from '@chakra-ui/react';

export const SectionGreet = () => {
	return (
		<Container as="section" pt={180} pb={{ base: 180, sm: 100 }}>
			<Heading as="h1" variant="h1" mb={{ base: 12, sm: 8 }}>
				Первая IT-лаборатория&nbsp;
				<Text color="basic.200" display="inline-block">
					коммерческой
				</Text>
				&nbsp;разработки
			</Heading>
			<Text variant="xl">
				Создаем уникальные сервисы и приложения для IT-индустрии на базе СПбГЭТУ
				ЛЭТИ с командой из более чем 30 специалистов с собственным R&D отделом
			</Text>
		</Container>
	);
};
