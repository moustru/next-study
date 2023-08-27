import { Flex, Grid, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const MiddleBar = () => {
	return (
		<Flex
			color="white"
			justifyContent={{ md: 'space-between' }}
			direction={{ md: 'row', xs: 'column' }}
			gap={{ xs: 8, md: 0 }}
		>
			<Text variant="md" fontWeight={400} color="grey.50">
				г. Санкт-Петербург <br /> ул. Профессора Попова, 5
			</Text>
			<Grid textAlign={{ md: 'right' }}>
				<Link href="tel:+79992018587">
					<Text
						variant="md"
						color="grey.50"
						sx={{ transition: 'color .3s' }}
						_hover={{
							color: 'basic.200',
						}}
					>
						+7 (999) 201-85-87
					</Text>
				</Link>
				<Link href="mailto:vibelab@etu.ru">
					<Text
						variant="md"
						color="grey.50"
						sx={{ transition: 'color .3s' }}
						_hover={{
							color: 'basic.200',
						}}
					>
						vibelab@etu.ru
					</Text>
				</Link>
			</Grid>
		</Flex>
	);
};

// color: var(--grey-10, #F1F2F3);
// /* Body/B3 24px */
// font-family: Circe;
// font-weight: 400;
// line-height: 30px; /* 125% */
