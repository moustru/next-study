import { Box } from '@chakra-ui/react';

export const SectionMap = () => {
	return (
		<Box
			sx={{
				position: 'relative',
				overflow: 'hidden',
			}}
			mx="auto"
			mb={{ lg: 180, md: 120, xs: '40px' }}
			pb={{ lg: '35%', md: '70%', xs: '100%' }}
		>
			<iframe
				title="Map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7986.715707802108!2d30.31335028732165!3d59.97064925253554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963158c69f153f%3A0x1940745bf861a861!2z0YPQuy4g0J_RgNC-0YTQtdGB0YHQvtGA0LAg0J_QvtC_0L7QstCwLCA1LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTk3MDIy!5e0!3m2!1sru!2sru!4v1691692691652!5m2!1sru!2sru"
				width="100%"
				height="100%"
				style={{ position: 'absolute' }}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</Box>
	);
};
