import { TabList as ChakraTabList, Tab } from '@chakra-ui/react';

export const blogTabItems: any = [
	{ text: 'Все', value: 'all' },
	{ text: 'Мобильная разработка', value: 'mobile' },
	{ text: 'QA', value: 'qa' },
	{ text: 'Дизайн', value: 'design' },
	{ text: 'Web-разработка', value: 'web' },
];

export const TabList = ({ onClick }: any) => {
	return (
		<ChakraTabList sx={{ border: 'none' }}>
			{blogTabItems.map((item: any) => (
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
