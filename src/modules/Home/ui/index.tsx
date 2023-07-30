import Head from 'next/head';
import { MetaInfo } from '@/shared/components/MetaInfo';
import { Container, Heading } from '@chakra-ui/react';

const HomePage = () => (
	<>
		<Head>
			<MetaInfo title="Vibe Lab – главная" />
		</Head>

		<Container>
			<Heading as="h1">Первая IT-лаборатория коммерческой разработки</Heading>
		</Container>
	</>
);

export { HomePage };
