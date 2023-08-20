import { Center, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { SectionForm } from '@/modules/Common/sections/SectionForm';
import { MetaInfo } from '@/shared/components/MetaInfo';

import { useServicePageData } from './api';
import { SectionAchievements } from './sections/SectionAchievements';
import { SectionCases } from './sections/SectionCases';
import { SectionDevSteps } from './sections/SectionDevSteps';
import { SectionMain } from './sections/SectionMain';

export const ServicePage = () => {
	const { query } = useRouter();

	const { data, isLoading } = useServicePageData(query.serviceId as string);

	const content = data?.data?.attributes;

	console.log(content);

	const renderSections = (sectionInfo: any, index: number) => {
		switch (sectionInfo.__component) {
			case 'sections.global-achievements':
				return (
					<SectionAchievements
						key={index}
						{...sectionInfo}
						variant={sectionInfo.variant}
					/>
				);
			case 'sections.global-steps':
				return <SectionDevSteps key={index} {...sectionInfo} />;
			case 'sections.same-projects':
				return <SectionCases key={index} {...sectionInfo} />;
			default:
				return (
					<Heading as="h3" variant="h3">
						Undefined section
					</Heading>
				);
		}
	};

	// TODO: Ну это надо убирать и решать вопрос с нормальной загрузкой данных
	if (isLoading)
		return (
			<Center w="100vw" h="100vh">
				<Heading as="h1" variant="h1">
					Loading...
				</Heading>
			</Center>
		);

	return (
		<>
			<Head>
				<MetaInfo title="Услуга" />
			</Head>

			<SectionMain title={content.title} subtitle={content.subtitle} />

			{content.zoneOfContents.map((contentSection: any, index: number) =>
				renderSections(contentSection, index)
			)}

			<SectionForm />
		</>
	);
};
