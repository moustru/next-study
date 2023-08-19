import { Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';

import { partners } from './mocks';

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
							width={200}
							quality={100}
							height={80}
							key={image + index}
							objectFit="contain"
						/>
					</GridItem>
				))}
			</Grid>
		</SectionTemplate>
	);
};
