import {
	CaseDataModel,
	CaseUIModel,
} from '@/modules/Cases/sections/SectionMain/types';

export const casesData: CaseDataModel[] = [
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

export const casesUI: CaseUIModel[] = [
	{
		size: 'sm',
		variant: 'dark',
		bgColor: 'grey.600',
	},
	{
		size: 'sm',
		variant: 'light',
		bgColor: 'grey.200',
	},
];
