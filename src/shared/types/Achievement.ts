import type { Variant } from './Variant';

export type AchievementModel = {
	id: number;
	place: number;
	description: string;
	icon: any;
	variant: Variant;
};
