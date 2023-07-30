import { Container, Heading, Text } from '@chakra-ui/react';

export const SectionGreet = () => {
	return (
		<Container as="section" pt={90} pb={180}>
			<Heading as="h1" variant="h1">
				Первая IT-лаборатория
				<Text color="basic.200" display="inline-block">
					&nbsp;коммерческой
				</Text>
				разработки
			</Heading>
			<Text variant="xl">
				Создаем уникальные сервисы и приложения для IT-индустрии на базе СПбГЭТУ
				ЛЭТИ с командой из более чем 30 специалистов с собственным R&D отделом
			</Text>
		</Container>
	);
};
