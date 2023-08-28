import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { SectionForm } from '@/modules/Common/sections/SectionForm';

import { useServicePageData } from './api';
import { SectionAchievements } from './sections/SectionAchievements';
import { SectionCases } from './sections/SectionCases';
import { SectionDevSteps } from './sections/SectionDevSteps';
import { SectionMain } from './sections/SectionMain';

export const ServicePage = () => {
	const { query } = useRouter();

	const { data } = useServicePageData(query.slug as string);

	const content = data.data[0].attributes;

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

	return (
		<>
			<SectionMain title={content.title} subtitle={content.subtitle} />

			{content.zoneOfContents.map((contentSection: any, index: number) =>
				renderSections(contentSection, index)
			)}

			<SectionForm />
		</>
	);
};
