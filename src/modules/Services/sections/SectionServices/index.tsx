import { Grid } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ServiceBlock } from '@/shared/components/ServiceBlock';

import { useServicesData } from '../../api';

export const SectionServices = () => {
	const { data } = useServicesData();

	const content = data?.data[0]?.attributes;

	return (
		<SectionTemplate title="Услуги" firstBlock>
			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={{ lg: 8, xs: 4 }}
			>
				{content?.services.map((service: any) => (
					<ServiceBlock {...service} key={service.id} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
