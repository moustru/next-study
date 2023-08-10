import Head from 'next/head';

import { MetaInfo } from '@/shared/components/MetaInfo';

import { SectionForm } from '../Common/sections/SectionForm';

import { SectionContacts } from './sections/SectionContacts';
import { SectionHistory } from './sections/SectionHistory';
import { SectionMain } from './sections/SectionMain';
import { SectionMap } from './sections/SectionMap';
import { SectionTeam } from './sections/SectionTeam';

export const AboutPage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – о нас" />
			</Head>

			<SectionMain />

			<SectionHistory />

			<SectionTeam />

			<SectionContacts />

			<SectionMap />

			<SectionForm />
		</>
	);
};
