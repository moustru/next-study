import Head from 'next/head';

import { SectionForm } from '@/modules/Common/sections/SectionForm';
import { MetaInfo } from '@/shared/components/MetaInfo';

import { SectionConclusions } from './sections/SectionConclusions';
import { SectionDescription } from './sections/SectionDescription';
import { SectionMain } from './sections/SectionMain';
import { SectionSimilarProjects } from './sections/SectionSimilarProjects';
import { SectionTeam } from './sections/SectionTeam';

export const CasePage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – кейс" />
			</Head>

			<SectionMain />

			<SectionDescription />

			<SectionConclusions />

			<SectionTeam />

			<SectionSimilarProjects />

			<SectionForm />
		</>
	);
};
