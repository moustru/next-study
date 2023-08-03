import { Box } from '@chakra-ui/react';
import Head from 'next/head';

import { MetaInfo } from '@/shared/components/MetaInfo';

import { SectionForm } from '../Common/sections/SectionForm';

import styles from './index.module.css';
import { SectionAchievements } from './sections/SectionAchievements';
import { SectionCases } from './sections/SectionCases';
import { SectionGreet } from './sections/SectionGreet';
import { SectionHelp } from './sections/SectionHelp';
import { SectionNews } from './sections/SectionNews';
import { SectionPartners } from './sections/SectionPartners';
import { SectionReviews } from './sections/SectionReviews';

const HomePage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – главная" />
			</Head>

			<Box pt="20px" className={styles.greet}>
				<SectionGreet />
				<SectionPartners />
			</Box>

			<SectionAchievements />

			<SectionHelp />

			<SectionCases />

			<SectionNews />

			<SectionReviews />

			<SectionForm />
		</>
	);
};

export { HomePage };
