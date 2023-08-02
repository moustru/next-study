import { Flex, Grid, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const MiddleBar = () => {
	return (
		<Flex color={'white'} justifyContent={'space-between'}>
			<Text variant={'sm'}>
				г. Санкт-Петербург <br /> ул. Профессора Попова, 5
			</Text>
			<Grid textAlign={'right'}>
				<Link href={'tel:+79992018587'}>
					<Text variant={'sm'}>+7 (999) 201-85-87</Text>
				</Link>
				<Link href={'mailto:vibelab@etu.ru'}>
					<Text variant={'sm'}>vibelab@etu.ru</Text>
				</Link>
			</Grid>
		</Flex>
	);
};
