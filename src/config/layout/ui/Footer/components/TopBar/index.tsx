import { Flex } from '@chakra-ui/react';

import { Links } from '../../../Links';
import { Logo } from '../../../Logo';

export const TopBar = () => {
	return (
		<Flex justifyContent="space-between">
			<Logo />
			<Links isLight />
		</Flex>
	);
};
