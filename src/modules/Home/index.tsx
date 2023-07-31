import Head from 'next/head';
import { MetaInfo } from '@/shared/components/MetaInfo';
import { SectionGreet } from './sections/SectionGreet';
import { Box, Button } from '@chakra-ui/react';
import styles from './index.module.css';
import { SectionPartners } from './sections/SectionPartners';
import { SectionAchievements } from './sections/SectionAchievements';
import { SectionHelp } from './sections/SectionHelp';
import { SectionCases } from './sections/SectionCases';
import { SectionNews } from './sections/SectionNews';
import { SectionReviews } from './sections/SectionReviews';
import { SectionForm } from '../Common/sections/SectionForm';

const HomePage = () => (
	<>
		<Head>
			<MetaInfo title="Vibe Lab – главная" />
		</Head>

		<Box className={styles.greet}>
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

export { HomePage };
