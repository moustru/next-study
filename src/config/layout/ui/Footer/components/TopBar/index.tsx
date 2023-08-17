import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { links } from '../../../Links/constants';
import { Logo } from '../../../Logo';

export const TopBar = () => {
	return (
		<Flex
			justifyContent="space-between"
			alignItems={{ xs: 'start', md: 'center' }}
			direction={{ xs: 'row-reverse', md: 'row' }}
		>
			<Logo />
			<Flex gap={{ xs: 4, md: 8 }} direction={{ xs: 'column', md: 'row' }}>
				{links.map((link) => (
					<Link href={link.href} key={link.id}>
						<Text variant={{ xs: 'md', md: 'sm' }} color="white">
							{link.pageName}
						</Text>
					</Link>
				))}
			</Flex>
		</Flex>
	);
};
