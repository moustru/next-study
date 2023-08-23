import { Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { MetaInfo } from '@/shared/components/MetaInfo';

import { SectionForm } from '../Common/sections/SectionForm';

import { useAboutData, useTeamData } from './api';
import { ImageSection } from './sections/ImageSection';
import { SectionContacts } from './sections/SectionContacts';
import { SectionHistory } from './sections/SectionHistory';
import { SectionMain } from './sections/SectionMain';
import { SectionMap } from './sections/SectionMap';
import { SectionTeam } from './sections/SectionTeam';

export const AboutPage = () => {
	const { data: aboutData } = useAboutData();
	const { data: teamData } = useTeamData();

	const aboutDataContent = aboutData.data[0].attributes;
	const teamDataContent = teamData.data.map(
		(teamItem: any) => teamItem.attributes
	);

	const renderSections = (sectionInfo: any, index: number) => {
		switch (sectionInfo.__component) {
			case 'about.roadmap':
				return <SectionHistory key={index} {...sectionInfo} />;
			case 'about.team':
				return <SectionTeam key={index} team={teamDataContent} />;
			case 'sections.image-section':
				return <ImageSection key={index} {...sectionInfo} />;
			case 'about.contacts':
				return <SectionContacts key={index} {...sectionInfo} />;
			default:
				return (
					<Heading as="h3" variant="h3" key={index}>
						Undefined section
					</Heading>
				);
		}
	};

	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – о нас" />
			</Head>

			<SectionMain subheading={aboutDataContent.subheading} />

			{aboutDataContent.zoneOfContents.map(
				(contentSection: any, index: number) =>
					renderSections(contentSection, index)
			)}

			<SectionMap />

			<SectionForm />
		</>
	);
};
