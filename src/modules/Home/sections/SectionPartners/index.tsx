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
					xl: 'repeat(4, 1fr)',
					lg: 'repeat(3, 1fr)',
					sm: 'repeat(2, 1fr)',
					xs: 'repeat(1, 1fr)',
				}}
				rowGap="3rem"
				columnGap="2rem"
			>
				{logos?.map((logo: any, index: number) => (
					<GridItem
						key={logo + index}
						position="relative"
						display="flex"
						alignItems="center"
						w={{
							md: '300px',
							xs: 'auto',
						}}
						h={50}
					>
						<Image
							src={logo}
							alt="Partner logo"
							fill
							loader={myImageLoader}
							quality={100}
							objectFit="contain"
						/>
					</GridItem>
				))}
			</Grid>
		</SectionTemplate>
	);
};
