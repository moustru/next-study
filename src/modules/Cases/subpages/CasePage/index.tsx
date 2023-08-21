import { Center, Heading } from '@chakra-ui/react';
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

	const { data } = useCasePageData(query.slug as string);

	if (!data)
		return (
			<Center>
				<Heading as="h1" variant="h1">
					404 - Страница не найдена
				</Heading>
			</Center>
		);

	const content = data.data[0].attributes.zoneOfContents;

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
