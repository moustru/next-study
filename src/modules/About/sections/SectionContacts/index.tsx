import { Flex, Stack, Text } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';

export const SectionContacts = () => {
	return (
		<SectionTemplate title="Контакты" mb={{ lg: '100px', xs: '40px' }}>
			<Stack>
				<Flex
					justifyContent="space-between"
					direction={{ lg: 'row', xs: 'column' }}
					gap={{ lg: 0, xs: 4 }}
				>
					<Text variant="xl" maxW={{ lg: 350, xs: 'none' }}>
						г. Санкт-Петербург, ул. Профессора Попова, 5
					</Text>

					<Flex gap={{ lg: 14, xs: 4 }} direction={{ lg: 'row', xs: 'column' }}>
						<Text variant="xl">+7 (999) 201-85-87</Text>
						<Text variant="xl">vibelab@etu.ru</Text>
					</Flex>
				</Flex>
			</Stack>
		</SectionTemplate>
	);
};
