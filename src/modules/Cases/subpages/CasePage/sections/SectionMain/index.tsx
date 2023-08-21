import { Button, Container, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import type { TagModel } from '@/shared/types/Tag';

type SectionMainModel = {
	heading: string;
	description: string;
	siteLink: string;
	appStoreLink: string;
	googleLink: string;
	tags: TagModel[];
};

export const SectionMain = ({
	heading,
	description,
	siteLink,
	appStoreLink,
	googleLink,
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
					{tags.map((tag) => (
						<Tag variant="default" key={tag.id}>
							{tag.value}
						</Tag>
					))}
				</Flex>
			</Container>

			<Container mb={{ lg: 180, md: '80px', xs: '40px' }}>
				<Flex gap={{ md: 4, xs: 2 }}>
					<Button variant="dark">
						<Link href={siteLink}>Перейти на сайт</Link>
					</Button>

					<Button width={54} variant="dark" p={0}>
						<Link href={appStoreLink}>
							<Image
								width={32}
								height={32}
								src="/icons/app_store.svg"
								alt="App Button"
							/>
						</Link>
					</Button>

					<Button width={54} variant="dark" p={0}>
						<Link href={googleLink}>
							<Image
								width={32}
								height={32}
								src="/icons/google_play.svg"
								alt="App Button"
							/>
						</Link>
					</Button>
				</Flex>
			</Container>
		</>
	);
};
