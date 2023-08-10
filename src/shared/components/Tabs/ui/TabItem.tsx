import { Box, Text } from '@chakra-ui/react';

import type { TabModel } from '@/shared/types/Tabs';

type TabItemModel = TabModel & {
	isActive: boolean;
	// eslint-disable-next-line no-unused-vars
	selectTab: (val: string) => void;
};

export const TabItem = ({ isActive, text, value, selectTab }: TabItemModel) => {
	const handleClick = () => {
		selectTab(value);
	};

	return (
		<Box
			px="16px"
			py="8px"
			borderRadius={10}
			bgColor={isActive ? 'rgba(64, 127, 252, 0.08)' : 'transparent'}
			cursor="pointer"
			onClick={handleClick}
		>
			<Text variant="sm" color="basic.200">
				{text}
			</Text>
		</Box>
	);
};
