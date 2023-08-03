import { Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { MetaInfo } from '@/shared/components/MetaInfo';

import { SectionForm } from '../Common/sections/SectionForm';

import { SectionServices } from './sections/SectionServices';


export const ServicesPage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – услуги" />
			</Head>

			<SectionServices />

			<SectionForm />
		</>
	);
};
