import { Box, Heading, Text } from '@chakra-ui/react';

type SectionMainModel = {
	subheading: string;
};

export const SectionMain = ({ subheading }: SectionMainModel) => {
	return (
		<Box
			mt={{ lg: 200, md: 160, xs: '120px' }}
			mb={{ lg: 120, md: '80px', xs: '40px' }}
			backgroundColor="grey.600"
		>
			<Box maxWidth={1440} m="0 auto" p={{ md: '60px', xs: '24px' }}>
				<Heading as="h1" variant="h1" color="grey.50" mb={{ md: 12, xs: 4 }}>
					Наша&nbsp;
					<Text color="basic.100" display="inline-block">
						миссия
					</Text>
				</Heading>
				<Text
					variant={{ md: 'xl', xs: 'md' }}
					color="grey.50"
					maxWidth={{ lg: '70%', xs: '100%' }}
				>
					{subheading}
				</Text>
			</Box>
		</Box>
	);
};
