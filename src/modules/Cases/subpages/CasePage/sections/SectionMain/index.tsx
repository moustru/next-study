import { Button, Container, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

type TagModel = {
	id: number;
	name: string;
};

type LinkModel = {
	id: number;
	href: string;
	title: string;
	iconSrc: string;
};

type LinkSectionModel = {
	button: Record<'href' | 'text', string>;
	links: LinkModel[];
};

type SectionMainModel = {
	heading: string;
	description: string;
	links: LinkSectionModel;
	tags: {
		tags: TagModel[];
	};
};

export const SectionMain = ({
	heading,
	description,
	links,
	tags,
}: SectionMainModel) => {
	return (
		<>
			<Container
				mt={{ md: 200, xs: 120 }}
				mb={{ lg: '64px', sm: '32px', xs: '16px' }}
			>
				<Heading as="h1" variant="h1" mb={{ lg: 10, xs: 6 }}>
					{heading}
				</Heading>
				<Text variant="lg" mb={{ lg: 12, xs: 6 }}>
					{description}
				</Text>
				<Flex gap={{ md: 4, xs: 2 }}>
					{tags.tags.map((tag) => (
						<Tag variant="default" key={tag.id}>
							{tag.name}
						</Tag>
					))}
				</Flex>
			</Container>

			<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
				<Flex gap={{ md: 4, xs: 2 }}>
					<Button variant="dark">
						<Link href={links.button.href}>{links.button.text}</Link>
					</Button>

					{links.links.map((link) => (
						<Button key={link.id} width={54} variant="dark" p={0}>
							<Link href={link.href}>
								<Image
									width={32}
									height={32}
									src={link.iconSrc || '/icons/app_store.svg'}
									alt="App Button"
								/>
							</Link>
						</Button>
					))}
				</Flex>
			</Container>
		</>
	);
};
