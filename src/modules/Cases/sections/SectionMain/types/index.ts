import type { Size } from '@/shared/types/Size';
import type { Variant } from '@/shared/types/Variant';

export type CaseDataModel = {
	title: string;
	developType: string;
	description: string;
	href: string;
	bgImage: string;
};

export type CaseUIModel = { size: Size; variant: Variant; bgColor: string };
