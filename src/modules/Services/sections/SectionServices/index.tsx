import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ServiceBlock } from '@/shared/components/ServiceBlock';

import { services } from './mocks/SectionServices.mocks';

export const SectionServices = () => {
	return (
		<SectionTemplate title="Услуги" firstBlock>
			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={{ base: 8, md: 4 }}
			>
				{services.map((service, i) => (
					<ServiceBlock {...service} key={service.title + i} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
