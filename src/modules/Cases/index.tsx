import { MetaInfo } from '@/shared/components/MetaInfo';
import Head from 'next/head';
import { SectionTemplate } from '../Common/sections/SectionTemplate';
import { Grid } from '@chakra-ui/react';
import { CaseBlock } from '@/shared/components/CaseBlock';
import { Size } from '@/shared/types/Size';
import { Variant } from '@/shared/types/Variant';
import { SectionForm } from '../Common/sections/SectionForm';

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

			<SectionTemplate title="Кейсы" firstBlock mt={20}>
				<Grid gridTemplateColumns="repeat(2, 1fr)" gap={8}>
					{casesArr.map((caseItem, i) => (
						<CaseBlock {...caseItem} key={caseItem.title + i} />
					))}
				</Grid>
			</SectionTemplate>

			<SectionForm />
		</>
	);
};
