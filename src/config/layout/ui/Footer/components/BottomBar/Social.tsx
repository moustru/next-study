import { Flex } from '@chakra-ui/react';
import { Icon as IconItem } from './types';
import { IconFactory } from './IconFactory';

export const Social = ({ icons }: { icons: IconItem[] }) => {
	return (
		<Flex gap={2}>
			{icons.map((icon) => (
				<IconFactory key={icon.id} href={icon.href} iconName={icon.name} />
			))}
		</Flex>
	);
};
