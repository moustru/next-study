import { HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { links } from './constants';

export const Links = ({ isLight = false }: { isLight?: boolean }) => {
	return (
		<HStack spacing={'32px'}>
			{links.map((link) => (
				<Link href={link.href} key={link.id}>
					<Text variant="sm" color={isLight ? 'white' : 'grey.600'}>
						{link.pageName}
					</Text>
				</Link>
			))}
		</HStack>
	);
};
