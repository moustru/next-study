import { useRouter } from 'next/router';

import { SectionForm } from '@/modules/Common/sections/SectionForm';

import { useCasePageData } from './api';
import { SectionConclusions } from './sections/SectionConclusions';
import { SectionImages } from './sections/SectionImages';
import { SectionMain } from './sections/SectionMain';
import { SectionSimilarProjects } from './sections/SectionSimilarProjects';
import { SectionTeam } from './sections/SectionTeam';
import { SectionText } from './sections/SectionText';

export const CasePage = () => {
	const { query } = useRouter();

	const { data } = useCasePageData(query.slug as string);

	const content = data.data[0].attributes.zoneOfContents;

	const renderSections = (sectionInfo: any, index: number) => {
		switch (sectionInfo.__component) {
			case 'case.header-of-case':
				return <SectionMain key={index} {...sectionInfo} />;
			case 'case.text-section':
				return <SectionText key={index} {...sectionInfo} />;
			case 'sections.image-section':
				return <SectionImages key={index} {...sectionInfo} />;
			case 'sections.sonclusions':
				return <SectionConclusions key={index} {...sectionInfo} />;
			case 'case.project-team':
				return <SectionTeam key={index} {...sectionInfo} />;
			case 'case.same-projects':
				return <SectionSimilarProjects key={index} />;
		}
	};

	return (
		<>
			{content.map((contentSection: any, index: number) =>
				renderSections(contentSection, index)
			)}

			<SectionForm />
		</>
	);
};
