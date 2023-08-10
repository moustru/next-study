import { Container, Heading, Text } from '@chakra-ui/react';

export const SectionMain = () => {
	return (
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
	);
};
