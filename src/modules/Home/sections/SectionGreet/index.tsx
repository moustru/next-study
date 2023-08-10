import { Container, Heading, Text } from '@chakra-ui/react';

export const SectionGreet = () => {
	return (
		<Container
			as="section"
			pt={{ md: 180, xs: '120px' }}
			pb={{ lg: 180, sm: 100, xs: '40px' }}
		>
			<Heading as="h1" variant="h1" mb={{ lg: 12, md: 8, xs: 4 }}>
				Первая IT-лаборатория&nbsp;
				<Text color="basic.200" display="inline-block">
					коммерческой&nbsp;
				</Text>
				разработки
			</Heading>
			<Text variant={{ md: 'xl', xs: 'md' }}>
				Создаем уникальные сервисы и приложения для IT-индустрии на базе СПбГЭТУ
				ЛЭТИ с командой из более чем 30 специалистов с собственным R&D отделом
			</Text>
		</Container>
	);
};
