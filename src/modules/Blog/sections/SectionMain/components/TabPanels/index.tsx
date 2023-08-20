import {
	TabPanels as ChakraTabPanels,
	TabPanel,
	Grid,
	Box,
	Flex,
	Text,
	Spinner,
} from '@chakra-ui/react';
import { useMemo } from 'react';

import { ArticleBlock } from '@/shared/components/ArticleBlock';

import { BlogTabItem, blogTabItems } from '../../constants';

export const TabPanels = ({ items, currGroup, isLoading, isError }: any) => {
	const filteredItems = useMemo(() => {
		if (currGroup === 'all') return items;

		return items.filter((item: any) =>
			item.attributes.tags.some(
				(tag: any) => tag.value.toLowerCase() === currGroup.toLowerCase()
			)
		);
	}, [items, currGroup]);

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
			{blogTabItems.map((el: BlogTabItem) => {
				return (
					<TabPanel key={el.value}>
						<Grid
							gridTemplateColumns={{
								lg: 'repeat(2, 1fr)',
								xs: 'repeat(1, 1fr)',
							}}
							gap={{ md: 8, xs: 4 }}
						>
							{filteredItems.length ? (
								filteredItems.map((item: any) => (
									<ArticleBlock
										key={item.id}
										title={item.attributes.articleTitle}
										tags={item.attributes.tags}
										date={item.attributes.publicationDate}
										author={item.attributes.author}
										subText={item.attributes.articleDescribe}
										href="#"
									/>
								))
							) : (
								<Text size="xs">
									Пожалуйста, не сердитесь, мы скоро опубликуем интересные
									статьи для вас
								</Text>
							)}
						</Grid>
					</TabPanel>
				);
			})}
		</ChakraTabPanels>
	);
};
