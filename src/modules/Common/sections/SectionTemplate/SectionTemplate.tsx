import { Container, Heading } from '@chakra-ui/react';

export const SectionTemplate = ({
	children,
	title = '',
	firstBlock = false,
	...others
}: any) => {
	return (
		<Container
			as="section"
			mt={firstBlock ? { lg: '200px', sm: '160px', xs: '100px' } : 0}
			mb={{ lg: '180px', sm: '100px', xs: '60px' }}
			{...others}
		>
			{title && (
				<Heading
					as={firstBlock ? 'h1' : 'h2'}
					variant={firstBlock ? 'h1' : 'h2'}
					mb={{ lg: 20, sm: 12, xs: 8 }}
				>
					{title}
				</Heading>
			)}
			{children}
		</Container>
	);
};
