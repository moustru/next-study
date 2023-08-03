import { Container } from '@chakra-ui/react';
import Head from 'next/head';

import { SectionForm } from '@/modules/Common/sections/SectionForm';
import { MetaInfo } from '@/shared/components/MetaInfo';

import { AuthorSegment } from './components/AuthorSegment';
import { GenerateSegment } from './components/GenerateSegment';
import { HeadSegment } from './components/HeadSegment';
import { TitleSegment } from './components/TitleSegment';
import {
	articleHeadSegment,
	articleAuthorSegment,
	articleTitleSegment,
	articleGenerateSegments,
} from './mocks/ArticlePage.mocks';

export const ArticlePage = () => {
	return (
		<>
			<Head>
				<MetaInfo title="Vibe Lab – блог" />
			</Head>

			<Container mt={180} mb={120}>
				<HeadSegment {...articleHeadSegment} />

				<TitleSegment {...articleTitleSegment} />

				<AuthorSegment {...articleAuthorSegment} />
			</Container>

			<GenerateSegment segments={articleGenerateSegments} />

			<SectionForm />
		</>
	);
};
