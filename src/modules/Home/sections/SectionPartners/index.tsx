import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import { partners } from './mocks/SectionPartners.mocks';

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
