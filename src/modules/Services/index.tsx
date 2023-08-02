import { MetaInfo } from '@/shared/components/MetaInfo';
import { Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { SectionServices } from './sections/SectionServices';
import { SectionForm } from '../Common/sections/SectionForm';

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
