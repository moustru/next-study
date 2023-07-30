import { HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { links } from './constants';

export const Links = ({ isLight }: { isLight: boolean }) => {
	return (
		<HStack>
			{links.map((link) => (
				<Link href={link.href} key={link.id}>
					<Text>{link.pageName}</Text>
				</Link>
			))}
		</HStack>
	);
};
