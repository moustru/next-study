import { MetaInfo } from '@/shared/components/MetaInfo';
import Head from 'next/head';
import { SectionTemplate } from '../Common/sections/SectionTemplate';
import { Grid } from '@chakra-ui/react';
import { CaseBlock } from '@/shared/components/CaseBlock';

export const caseItems = [
	{
		title: 'Advocall',
		developType: 'Разработка мобильного приложения',
		description: 'Быстрая юридическая помощь',
		href: '#',
		bgImage: 'mobile.png',
	},
	{
		title: 'dilab',
		developType: 'Разработка web-сервиса',
		description: 'Записывайтесь на прием с комфортом',
		href: '#',
		bgImage: 'desktop.png',
	},
];

export const CasesPage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – кейсы" />
			</Head>

			<SectionTemplate title="Кейсы" firstBlock mt={20}>
				<Grid gridTemplateColumns="repeat(2, 1fr)" gap={8}>
					<CaseBlock
						{...caseItems[0]}
						bgColor="grey.200"
						size="sm"
						key={caseItems[0].title}
					/>
					<CaseBlock
						{...caseItems[1]}
						bgColor="grey.600"
						size="sm"
						variant="dark"
						key={caseItems[1].title}
					/>
				</Grid>
			</SectionTemplate>
		</>
	);
};
