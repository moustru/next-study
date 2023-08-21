import { Box, Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { MetaInfo } from '@/shared/components/MetaInfo';

import { SectionForm } from '../Common/sections/SectionForm';

import { useHomeData } from './api';
import styles from './index.module.css';
import { SectionAchievements } from './sections/SectionAchievements';
import { SectionCases } from './sections/SectionCases';
import { SectionGreet } from './sections/SectionGreet';
import { SectionHelp } from './sections/SectionHelp';
import { SectionNews } from './sections/SectionNews';
import { SectionPartners } from './sections/SectionPartners';
import { SectionReviews } from './sections/SectionReviews';

const HomePage = () => {
	const { data } = useHomeData();

	const content = data.data[0].attributes;

	console.log(content);

	const renderSections = (sectionInfo: any, index: number) => {
		switch (sectionInfo.__component) {
			case 'home.partners':
				return (
					<Box key={index} className={styles.greet}>
						<SectionGreet subheading={content.subheading} />
						<SectionPartners {...sectionInfo} />
					</Box>
				);
			case 'sections.global-achievements':
				return <SectionAchievements key={index} {...sectionInfo} />;
			case 'sections.global-steps':
				return <SectionHelp key={index} {...sectionInfo} />;
			case 'sections.same-projects':
				return <SectionCases key={index} {...sectionInfo} />;
			case 'home.news':
				return <SectionNews key={index} {...sectionInfo} />;
			case 'home.reviews':
				return <SectionReviews key={index} {...sectionInfo} />;
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
				<MetaInfo title="Vibe Lab – главная" />
			</Head>

			{content.zoneOfContents.map((contentSection: any, index: number) =>
				renderSections(contentSection, index)
			)}

			<SectionForm />
		</>
	);
};

export { HomePage };
