import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { Grid, GridItem } from '@chakra-ui/react';
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
		<SectionTemplate title="С нами работают" {...others}>
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
		</SectionTemplate>
	);
};
