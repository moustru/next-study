import Head from 'next/head';
import { MetaInfo } from '@/shared/components/MetaInfo';
import { SectionGreet } from './sections/SectionGreet';
import { Box } from '@chakra-ui/react';
import styles from './index.module.css';
import { SectionPartners } from './sections/SectionPartners';
import { SectionAchievements } from './sections/SectionAchievements';

const HomePage = () => (
	<>
		<Head>
			<MetaInfo title="Vibe Lab – главная" />
		</Head>

		<Box className={styles.greet}>
			<SectionGreet />
			<SectionPartners mb="180px" />
		</Box>

		<SectionAchievements mb="180px" />
	</>
);

export { HomePage };
