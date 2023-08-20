import { Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import myImageLoader from '@/shared/utils/imageLoader';

export const SectionPartners = ({ partnersLogos, ...others }: any) => {
	const logos = partnersLogos?.data?.map((logo: any) => logo.attributes.url);

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
				{logos?.map((logo: any, index: number) => (
					<GridItem key={logo + index}>
						<Image
							src={logo}
							alt="Partner logo"
							width={300}
							height={60}
							loader={myImageLoader}
							objectFit="contain"
						/>
					</GridItem>
				))}
			</Grid>
		</SectionTemplate>
	);
};
