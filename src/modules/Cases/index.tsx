import Head from 'next/head';

import { MetaInfo } from '@/shared/components/MetaInfo';

import { SectionForm } from '../Common/sections/SectionForm';

import { SectionMain } from './sections/SectionMain';

export const CasesPage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – кейсы" />
			</Head>

			<SectionMain />

			<SectionForm />
		</>
	);
};
