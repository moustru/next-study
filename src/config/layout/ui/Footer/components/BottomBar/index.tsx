import { Flex, Grid, Text } from '@chakra-ui/react';

import { Social } from './Social';
import { icons } from './constants';

export const BottomBar = () => {
	return (
		<Flex
			justifyContent={{ md: 'space-between' }}
			direction={{ xs: 'column-reverse', md: 'row' }}
			gap={{ xs: 8, md: 0 }}
		>
			<Grid color="white">
				<Text variant="xs">
					Лаборатория коммерческой разработки VibeLab, 2023
				</Text>
				<Text variant="xs">Все права защищены</Text>
			</Grid>
			<Social icons={icons} />
		</Flex>
	);
};
