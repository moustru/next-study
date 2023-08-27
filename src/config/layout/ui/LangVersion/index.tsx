import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import css from './index.module.css';

const EN_HREF = 'https://Vibelab.ai';

export const LangVersion = () => {
	return (
		<Flex gap={1}>
			<Text className={css.ru} color="grey.600" variant="md">
				RU
			</Text>
			<Link className={css.en} target="_blank" href={EN_HREF}>
				<Text color="grey.400" variant="md">
					EN
				</Text>
			</Link>
		</Flex>
	);
};
