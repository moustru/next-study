import { Grid, useMediaQuery } from '@chakra-ui/react';
import { type PropsWithChildren } from 'react';

import { HeaderMobile } from './ui/Burger';
import { Footer } from './ui/Footer';
import { Header } from './ui/Header';

export function AppLayout({ children }: PropsWithChildren) {
	const [largerThan768] = useMediaQuery('(min-width: 768px)');

	return (
		<Grid minH="100vh" gridTemplateRows="auto 1fr auto">
			{largerThan768 ? <Header /> : <HeaderMobile />}

			<main>{children}</main>
			<Footer />

			{/* <ModalForm isOpen={isOpen} onClose={onClose} /> */}
		</Grid>
	);
}
