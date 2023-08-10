import Head from 'next/head';

import { SectionForm } from '@/modules/Common/sections/SectionForm';
import { MetaInfo } from '@/shared/components/MetaInfo';

import { SectionAchievements } from './sections/SectionAchievements';
import { SectionCases } from './sections/SectionCases';
import { SectionDevSteps } from './sections/SectionDevSteps';
import { SectionMain } from './sections/SectionMain';

export const ServicePage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Услуга" />
			</Head>

			<SectionMain />

			<SectionAchievements />

			<SectionDevSteps />

			<SectionCases />

			<SectionForm />
		</>
	);
};
