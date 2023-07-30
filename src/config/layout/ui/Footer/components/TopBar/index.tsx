import { Flex } from '@chakra-ui/react';
import { Logo } from '../../../Logo';
import { Links } from '../../../Links';

export const TopBar = () => {
	return (
		<Flex justifyContent={'space-between'}>
			<Logo />
			<Links isLight />
		</Flex>
	);
};
