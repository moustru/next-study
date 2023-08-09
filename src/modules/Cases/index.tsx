import { Grid } from '@chakra-ui/react';
import Head from 'next/head';

import { CaseBlock } from '@/shared/components/CaseBlock';
import { MetaInfo } from '@/shared/components/MetaInfo';
import { Size } from '@/shared/types/Size';
import { Variant } from '@/shared/types/Variant';

import { SectionForm } from '../Common/sections/SectionForm';
import { SectionTemplate } from '../Common/sections/SectionTemplate';

export const caseItems = [
	{
		title: 'Advocall',
		developType: 'Разработка мобильного приложения',
		description: 'Быстрая юридическая помощь',
		href: '/case-page',
		bgImage: 'mobile.png',
	},
	{
		title: 'dilab',
		developType: 'Разработка web-сервиса',
		description: 'Записывайтесь на прием с комфортом',
		href: '/case-page',
		bgImage: 'desktop.png',
	},
	{
		title: 'Advocall',
		developType: 'Разработка мобильного приложения',
		description: 'Быстрая юридическая помощь',
		href: '/case-page',
		bgImage: 'mobile.png',
	},
	{
		title: 'dilab',
		developType: 'Разработка web-сервиса',
		description: 'Записывайтесь на прием с комфортом',
		href: '/case-page',
		bgImage: 'desktop.png',
	},
];

type CasesUI = { size: Size; variant: Variant; bgColor: string };

const casesUI: CasesUI[] = [
	{
		size: 'sm',
		variant: 'light',
		bgColor: 'light.200',
	},
	{
		size: 'sm',
		variant: 'dark',
		bgColor: 'grey.600',
	},
	{
		size: 'sm',
		variant: 'light',
		bgColor: 'light.200',
	},
	{
		size: 'sm',
		variant: 'light',
		bgColor: 'light.200',
	},
];

const casesArr = caseItems.map((caseItem, i) =>
	Object.assign(caseItem, casesUI[i])
);

export const CasesPage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – кейсы" />
			</Head>

			<SectionTemplate title="Кейсы" firstBlock mt={{ md: 200, xs: '120px' }}>
				<Grid
					gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
					gap={{ md: 8, xs: 4 }}
				>
					{casesArr.map((caseItem, i) => (
						<CaseBlock {...caseItem} key={caseItem.title + i} />
					))}
				</Grid>
			</SectionTemplate>

			<SectionForm />
		</>
	);
};
