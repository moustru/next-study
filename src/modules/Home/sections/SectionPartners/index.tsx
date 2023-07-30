import { Container, Flex, Grid, Heading } from '@chakra-ui/react';
import Image from 'next/image';

const partners = [
	{ image: 'chulakov.png', alt: 'Chulakov' },
	{ image: 'huawei.png', alt: 'Huawei' },
	{ image: 'kode.png', alt: 'Kode' },
	{ image: 'med.png', alt: 'Med' },
	{ image: 'red_mad_robot.png', alt: 'Red Mad Robot' },
	{ image: 'sferus.png', alt: 'Sferus' },
	{ image: 'touch_instinct.png', alt: 'Touch Instinct' },
	{ image: 'wallet.png', alt: 'Wallet' },
];

export const SectionPartners = () => {
	return (
		<Container as="section">
			<Heading as="h2" variant="h2">
				С нами работают
			</Heading>

			<Grid>
				{partners.map(({ image, alt }, index) => (
					<Image
						src={`/images/partners/${image}`}
						alt={alt}
						width={300}
						height={80}
						key={image + index}
					/>
				))}
			</Grid>
		</Container>
	);
};
