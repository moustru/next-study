import { Tabs } from '@chakra-ui/react';
import { useState } from 'react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';

import { useArticlesData } from './api';
import { TabList } from './components/TabList';
import { TabPanels } from './components/TabPanels';

export const SectionMain = () => {
	const { data, isLoading, error } = useArticlesData();
	const [filteredNews, setFilteredNews] = useState<string>('all');

	const blogData = data?.data;

	return (
		<SectionTemplate title="Блог" firstBlock>
			<Tabs>
				<TabList onClick={setFilteredNews} />
				<TabPanels
					isLoading={isLoading}
					isError={error}
					currGroup={filteredNews}
					items={blogData}
				/>
			</Tabs>
		</SectionTemplate>
	);
};
