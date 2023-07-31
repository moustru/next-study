import { Container, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

type SectionTemplate = {
	children: ReactNode;
	title?: string;
};

export const SectionTemplate = ({
	children,
	title = '',
	...others
}: SectionTemplate) => {
	return (
		<Container as="section" {...others} mb="180px">
			{title && (
				<Heading as="h2" variant="h2" mb={20}>
					{title}
				</Heading>
			)}
			{children}
		</Container>
	);
};
