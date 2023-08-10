import type { CaseUIModel, CaseDataModel } from '../types';

export const casesItems: CaseDataModel[] = [
	{
		title: 'Advocall',
		developType: 'Разработка мобильного приложения',
		description: 'Быстрая юридическая помощь',
		href: '/cases/1',
		bgImage: 'mobile.png',
	},
	{
		title: 'dilab',
		developType: 'Разработка web-сервиса',
		description: 'Записывайтесь на прием с комфортом',
		href: '/cases/2',
		bgImage: 'desktop.png',
	},
	{
		title: 'Advocall',
		developType: 'Разработка мобильного приложения',
		description: 'Быстрая юридическая помощь',
		href: '/cases/3',
		bgImage: 'mobile.png',
	},
	{
		title: 'dilab',
		developType: 'Разработка web-сервиса',
		description: 'Записывайтесь на прием с комфортом',
		href: '/cases/4',
		bgImage: 'desktop.png',
	},
];

export const casesUI: CaseUIModel[] = [
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
