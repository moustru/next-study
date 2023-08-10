import Head from 'next/head';

import { MetaInfo } from '@/shared/components/MetaInfo';

import { SectionForm } from '../Common/sections/SectionForm';

import { SectionMain } from './sections/SectionMain';

export const BlogPage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – блог" />
			</Head>

			<SectionMain />
			<SectionForm />
		</>
	);
};
