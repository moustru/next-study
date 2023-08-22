import { TabList as ChakraTabList, Tab, Text } from '@chakra-ui/react';

import { blogTabItems, BlogTabItem } from '../../constants';

export const TabList = ({ onClick }: { onClick: (arg0: string) => void }) => {
	return (
		<ChakraTabList sx={{ border: 'none' }}>
			{blogTabItems.map((item: BlogTabItem) => (
				<Tab
					key={item.value}
					value={item.value}
					onClick={() => onClick(item.value)}
					sx={{ border: 'none', paddingInline: '4', paddingBlock: '2' }}
				>
					<Text variant="sm">{item.text}</Text>
				</Tab>
			))}
		</ChakraTabList>
	);
};
