import { Container, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const SectionTemplate = ({
	children,
	title = '',
	firstBlock = false,
	...others
}: any) => {
	return (
		<Container as="section" {...others} mb="180px">
			{title && (
				<Heading
					as={firstBlock ? 'h1' : 'h2'}
					variant={firstBlock ? 'h1' : 'h2'}
					mb={20}
				>
					{title}
				</Heading>
			)}
			{children}
		</Container>
	);
};
