import { TabList as ChakraTabList, Tab } from '@chakra-ui/react';

import { blogTabItems, BlogTabItem } from '../../constants';

export const TabList = ({ onClick }: { onClick: (arg0: string) => void }) => {
	return (
		<ChakraTabList sx={{ border: 'none' }}>
			{blogTabItems.map((item: BlogTabItem) => (
				<Tab
					key={item.value}
					value={item.value}
					onClick={(event: any) => onClick(event.target.value)}
					sx={{ border: 'none', paddingInline: '4', paddingBlock: '2' }}
				>
					{item.text}
				</Tab>
			))}
		</ChakraTabList>
	);
};
