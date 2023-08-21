import { Container, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { SectionForm } from '@/modules/Common/sections/SectionForm';
import { MetaInfo } from '@/shared/components/MetaInfo';

import { useArticleData } from './api';
import { AuthorSegment } from './components/AuthorSegment';
import { HeadSegment } from './components/HeadSegment';
import { ImageSegment } from './components/ImageSegment';
import { TextSegment } from './components/TextSegment';
import { TitleSegment } from './components/TitleSegment';

export const ArticlePage = () => {
	const { query } = useRouter();

	const { data } = useArticleData(query.articleId as string);

	const content = data.data.attributes;

	const renderSections = (sectionInfo: any, index: number) => {
		switch (sectionInfo.__component) {
			case 'blog.text-section':
				return <TextSegment key={index} {...sectionInfo} />;
			case 'blog.image-section':
				return <ImageSegment key={index} {...sectionInfo} />;
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
				<MetaInfo title="Vibe Lab – блог" />
			</Head>

			<Container mt={{ md: 200, xs: 120 }} mb={{ lg: 120, md: '80px' }}>
				<HeadSegment
					tags={content.tags}
					publicationDate={content.publicationDate}
				/>

				<TitleSegment articleTitle={content.articleTitle} />

				<AuthorSegment
					author={content.author}
					authorAvatar={content.authorAvatar}
					likes={content.likes}
				/>
			</Container>

			{content.zoneOfContents.map((contentSection: any, index: number) =>
				renderSections(contentSection, index)
			)}

			<SectionForm />
		</>
	);
};
