import { Grid } from '@chakra-ui/react';
import Image from 'next/image';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import myImageLoader from '@/shared/utils/imageLoader';

export const ImageSection = ({ images }: any) => {
	const imagesURL = images.data.map((image: any) => image.attributes.url);

	return (
		<SectionTemplate>
			<Grid
				gridTemplateColumns={{
					lg: `repeat(${imagesURL.length}, 1fr)`,
					md: `repeat(2, 1fr)`,
					xs: `repeat(1, 1fr)`,
				}}
				gap="32px"
			>
				{imagesURL.map((image: any, i: number) => (
					<Image
						src={image}
						key={image + i}
						alt="Картинка"
						loader={myImageLoader}
						width={640}
						height={460}
						objectFit="contain"
					/>
				))}
			</Grid>
		</SectionTemplate>
	);
};
