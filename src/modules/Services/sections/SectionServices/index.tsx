import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ServiceBlock } from '@/shared/components/ServiceBlock';

import { services } from './mocks/SectionServices.mocks';

export const SectionServices = () => {
	return (
		<SectionTemplate title="Услуги" firstBlock>
			<Grid gridTemplateColumns="repeat(2, 1fr)" gap={8}>
				{services.map((service, i) => (
					<ServiceBlock {...service} key={service.title + i} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
