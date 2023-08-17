import { Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';

import { partners } from './mocks';

// type SectionPartnersModel = {
// 	partners:
// }

export const SectionPartners = ({ ...others }: any) => {
	return (
		<SectionTemplate title="С нами работают" {...others}>
			<Grid
				templateColumns={{
					lg: 'repeat(4, 1fr)',
					sm: 'repeat(2, 1fr)',
					xs: 'repeat(1, 1fr)',
				}}
				rowGap="2rem"
			>
				{partners.map(({ image, alt }, index) => (
					<GridItem key={image + index}>
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
