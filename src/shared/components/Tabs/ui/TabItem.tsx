import { Box, Text } from '@chakra-ui/react';

import type { TabModel } from '@/shared/types/Tabs';

type TabItemModel = TabModel & {
	isActive: boolean;
	// eslint-disable-next-line no-unused-vars
	selectTab?: (val: TabModel) => void;
};

export const TabItem = ({
	isActive,
	text,
	value,
	selectTab = () => false,
}: TabItemModel) => {
	const handleClick = () => {
		selectTab({ text, value });
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
