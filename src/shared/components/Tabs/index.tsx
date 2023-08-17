import {
	Button,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useMediaQuery,
} from '@chakra-ui/react';
import { useState } from 'react';

import { TabItem } from './ui/TabItem';

import type { TabModel } from '@/shared/types/Tabs';

import ChevronDownSVG from 'public/icons/chevron_down.svg';

type TabsModel = {
	tabs: TabModel[];
};

export const Tabs = ({ tabs }: TabsModel) => {
	const [largerThan768] = useMediaQuery('(min-width: 768px)');
	const [selectedTab, setSelectedTab] = useState<TabModel>({
		text: 'Все',
		value: 'all',
	});

	const handleClick = (value: TabModel) => {
		setSelectedTab(value);
	};

	return largerThan768 ? (
		<Flex
			direction={{ xs: 'column', md: 'row' }}
			w={{ xs: '100%', md: 'fit-content' }}
			mb="40px"
			p="10px"
			backgroundColor="light.100"
			borderRadius={12}
		>
			{tabs.map((tab, i) => (
				<TabItem
					{...tab}
					key={i}
					isActive={selectedTab.value === tab.value}
					selectTab={handleClick}
				/>
			))}
		</Flex>
	) : (
		<Menu>
			<MenuButton
				mb={12}
				as={Button}
				rightIcon={<ChevronDownSVG width="12px" />}
				w="100%"
			>
				{selectedTab.text}
			</MenuButton>
			<MenuList>
				{tabs.map((tab, i) => (
					<MenuItem
						key={i}
						onClick={() => handleClick(tab)}
						sx={{ backgroundColor: 'transparent' }}
					>
						<TabItem {...tab} isActive={selectedTab.value === tab.value} />
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};
