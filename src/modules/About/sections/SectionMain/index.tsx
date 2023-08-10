import { Box, Heading, Text } from '@chakra-ui/react';

export const SectionMain = () => {
	return (
		<Box
			mt={{ lg: 200, md: 160, xs: 120 }}
			mb={{ lg: 120, md: '80px', xs: '40px' }}
			backgroundColor="grey.600"
		>
			<Box maxWidth={1440} m="0 auto" p={{ md: '60px', xs: '24px' }}>
				<Heading as="h1" variant="h1" color="grey.100" mb={{ md: 12, xs: 4 }}>
					Наша&nbsp;
					<Text color="basic.200" display="inline-block">
						миссия
					</Text>
				</Heading>
				<Text
					variant={{ md: 'xl', xs: 'md' }}
					color="grey.100"
					maxWidth={{ lg: '70%', xs: '100%' }}
				>
					Создаем уникальные сервисы и приложения для IT-индустрии на базе
					СПбГЭТУ ЛЭТИ с командой из более чем 30 специалистов с собственным R&D
					отделом. Создаем уникальные сервисы и приложения для IT-индустрии на
					базе СПбГЭТУ ЛЭТИ с командой из более чем 30 специалистов с
					собственным R&D отделом. Создаем уникальные сервисы и приложения для
					IT-индустрии на базе СПбГЭТУ ЛЭТИ с командой из более чем 30
					специалистов с собственным R&D отделом. Создаем уникальные сервисы и
					приложения для IT-индустрии на базе{' '}
				</Text>
			</Box>
		</Box>
	);
};
