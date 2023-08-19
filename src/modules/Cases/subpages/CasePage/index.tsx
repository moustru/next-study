import { Center, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { SectionForm } from '@/modules/Common/sections/SectionForm';
import { MetaInfo } from '@/shared/components/MetaInfo';

import { useCasePageData } from './api';
import { SectionConclusions } from './sections/SectionConclusions';
import { SectionDescription } from './sections/SectionDescription';
import { SectionMain } from './sections/SectionMain';
import { SectionSimilarProjects } from './sections/SectionSimilarProjects';
import { SectionTeam } from './sections/SectionTeam';

export const CasePage = () => {
	const { query } = useRouter();

	const { data, isLoading } = useCasePageData(query.caseId as string);

	// console.log(data);

	const content = data?.data?.attributes?.zoneOfContents;

	console.log(content);

	const renderSections = (sectionInfo: any, index: number) => {
		switch (sectionInfo.__component) {
			case 'sections.header-of-case':
				return <SectionMain key={index} {...sectionInfo} />;
			case 'sections.describe-of-work':
				return <SectionDescription key={index} {...sectionInfo} />;
			case 'sections.sonclusions':
				return <SectionConclusions key={index} {...sectionInfo} />;
			case 'sections.project-team':
				return <SectionTeam key={index} {...sectionInfo} />;
			case 'sections.same-projects':
				return <SectionSimilarProjects key={index} {...sectionInfo} />;
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
				<MetaInfo title="Vibe Lab – кейс" />
			</Head>

			{content.map((contentSection: any, index: number) =>
				renderSections(contentSection, index)
			)}

			<SectionForm />
		</>
	);
};
