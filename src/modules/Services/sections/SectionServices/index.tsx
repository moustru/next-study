import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { Grid } from '@chakra-ui/react';
import { services } from './mocks/SectionServices.mocks';
import { ServiceBlock } from '@/shared/components/ServiceBlock';

export const SectionServices = () => {
	return (
		<SectionTemplate title="Услуги" mt={20}>
			<Grid gridTemplateColumns="repeat(2, 1fr)" gap={8}>
				{services.map((service, i) => (
					<ServiceBlock {...service} key={service.title + i} />
				))}
			</Grid>
		</SectionTemplate>
	);
};
