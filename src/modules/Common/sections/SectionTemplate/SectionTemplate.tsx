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
			mt={firstBlock ? '200px' : 0}
			mb={{ base: '180px', sm: '100px' }}
			{...others}
		>
			{title && (
				<Heading
					as={firstBlock ? 'h1' : 'h2'}
					variant={firstBlock ? 'h1' : 'h2'}
					mb={{ base: 20, sm: 12 }}
				>
					{title}
				</Heading>
			)}
			{children}
		</Container>
	);
};
