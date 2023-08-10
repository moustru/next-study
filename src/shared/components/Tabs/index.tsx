import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { TabItem } from './ui/TabItem';

import type { TabModel } from '@/shared/types/Tabs';

type TabsModel = {
	tabs: TabModel[];
};

export const Tabs = ({ tabs }: TabsModel) => {
	const [selectedTab, setSelectedTab] = useState<string>('all');

	const handleClick = (value: string) => {
		setSelectedTab(value);
	};

	return (
		<Flex
			w="fit-content"
			mb="40px"
			p="10px"
			backgroundColor="light.100"
			borderRadius={12}
		>
			{tabs.map((tab, i) => (
				<TabItem
					{...tab}
					key={i}
					isActive={selectedTab === tab.value}
					selectTab={handleClick}
				/>
			))}
		</Flex>
	);
};
