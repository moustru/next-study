import { Flex } from '@chakra-ui/react';

import { IconFactory } from './IconFactory';
import { Icon as IconItem } from './types';

export const Social = ({ icons }: { icons: IconItem[] }) => {
	return (
		<Flex gap={6}>
			{icons.map((icon) => (
				<IconFactory key={icon.id} href={icon.href} iconName={icon.name} />
			))}
		</Flex>
	);
};
