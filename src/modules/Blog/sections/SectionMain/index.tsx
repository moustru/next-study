import { Tabs } from '@chakra-ui/react';
import { useState } from 'react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';

import { useAllArticlesData } from '../../api';

import { TabList } from './components/TabList';
import { TabPanels } from './components/TabPanels';

export const SectionMain = () => {
	const { data, isLoading, error } = useAllArticlesData();
	const [filteredNews, setFilteredNews] = useState<string>('all');

	const content = data.data.map((obj: any) => ({
		...obj.attributes,
		id: obj.id,
	}));

	return (
		<SectionTemplate title="Блог" firstBlock>
			<Tabs>
				<TabList onClick={setFilteredNews} />
				<TabPanels
					isLoading={isLoading}
					isError={error}
					currGroup={filteredNews}
					items={content}
				/>
			</Tabs>
		</SectionTemplate>
	);
};
