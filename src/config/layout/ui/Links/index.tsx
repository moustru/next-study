import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { links } from './constants';

type LinksModel = {
	isLight?: boolean;
	closeMenu?: () => void;
};

export const Links = ({
	isLight = false,
	closeMenu = () => false,
}: LinksModel) => {
	return (
		<Flex gap={8} direction={{ xs: 'column', md: 'row' }}>
			{links.map((link) => (
				<Link href={link.href} key={link.id} onClick={closeMenu}>
					<Text
						variant={{ xs: 'xl', md: 'sm' }}
						color={isLight ? 'white' : 'grey.600'}
						sx={{ fontWeight: '600 !important' }}
						_hover={{
							color: 'basic.200',
						}}
					>
						{link.pageName}
					</Text>
				</Link>
			))}
		</Flex>
	);
};
