import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { links } from './constants';

type LinksModel = {
	isLight?: boolean;
	closeMenu?: () => void;
};

export const Links = ({
	isLight = false,
	closeMenu = () => false,
}: LinksModel) => {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<Flex gap={{ xs: 4, md: 8 }} direction={{ xs: 'column', md: 'row' }}>
			{links.map((link) => (
				<Link href={link.href} key={link.id} onClick={closeMenu}>
					<Text
						variant={{ md: 'md' }}
						color={isLight ? 'white' : 'grey.600'}
						sx={{
							fontWeight: '400 !important',
							color: currentRoute === link.href && 'basic.300',
							transition: 'color .3s',
						}}
						_hover={{
							color: 'basic.100',
						}}
					>
						{link.pageName}
					</Text>
				</Link>
			))}
		</Flex>
	);
};
