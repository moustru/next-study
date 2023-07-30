import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import Image from 'next/image';

const partners = [
	{ image: 'chulakov.png', alt: 'Chulakov' },
	{ image: 'wallet.png', alt: 'Wallet' },
	{ image: 'kode.png', alt: 'Kode' },
	{ image: 'red_mad_robot.png', alt: 'Red Mad Robot' },
	{ image: 'med.png', alt: 'Med' },
	{ image: 'sferus.png', alt: 'Sferus' },
	{ image: 'huawei.png', alt: 'Huawei' },
	{ image: 'touch_instinct.png', alt: 'Touch Instinct' },
];

export const SectionPartners = ({ ...others }) => {
	return (
		<Container as="section" {...others}>
			<Heading as="h2" variant="h2" mb="5rem">
				С нами работают
			</Heading>

			<Grid templateColumns="repeat(4, 1fr)" rowGap="2rem">
				{partners.map(({ image, alt }, index) => (
					<GridItem>
						<Image
							src={`/images/partners/${image}`}
							alt={alt}
							width={300}
							height={80}
							key={image + index}
						/>
					</GridItem>
				))}
			</Grid>
		</Container>
	);
};
