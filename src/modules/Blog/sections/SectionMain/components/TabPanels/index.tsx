import {
	TabPanels as ChakraTabPanels,
	TabPanel,
	Grid,
	Box,
	Flex,
	Spinner,
} from '@chakra-ui/react';

import { ArticleBlock } from '@/shared/components/ArticleBlock';

export const blogTabItems: any = [
	{ text: 'Все', value: 'all' },
	{ text: 'Мобильная разработка', value: 'mobile' },
	{ text: 'QA', value: 'qa' },
	{ text: 'Дизайн', value: 'design' },
	{ text: 'Web-разработка', value: 'web' },
];

export const TabPanels = ({ items, currGroup, isLoading, isError }: any) => {
	if (isLoading)
		return (
			<Flex
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="400px"
			>
				<Spinner />
			</Flex>
		);

	if (isError) return <Box>An error has occurred</Box>;

	return (
		<ChakraTabPanels>
			{blogTabItems.map((el: any) => {
				const filteredItems =
					currGroup === 'all'
						? items
						: items.filter((item: any) => item.relative === currGroup);

				return (
					<TabPanel key={el.value}>
						<Grid
							gridTemplateColumns={{
								lg: 'repeat(2, 1fr)',
								xs: 'repeat(1, 1fr)',
							}}
							gap={{ md: 8, xs: 4 }}
						>
							{filteredItems.map((item: any) => (
								<ArticleBlock
									key={item.id}
									title={item.title}
									tag={item.tag}
									date={item.date}
									position={item.position}
									subText={item.describe}
									href="#"
								/>
							))}
						</Grid>
					</TabPanel>
				);
			})}
		</ChakraTabPanels>
	);
};
