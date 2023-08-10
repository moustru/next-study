import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ArticleBlock } from '@/shared/components/ArticleBlock';
import { Tabs } from '@/shared/components/Tabs';

import { blogTabItems } from './mocks';

export const SectionMain = () => {
	return (
		<SectionTemplate title="Блог" firstBlock>
			<Tabs tabs={blogTabItems} />

			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={{ md: 8, xs: 4 }}
			>
				<ArticleBlock />
				<ArticleBlock />
			</Grid>
		</SectionTemplate>
	);
};
