import { Grid, useMediaQuery } from '@chakra-ui/react';

import { HeaderMobile } from './ui/Burger';
import { Footer } from './ui/Footer';
import { Header } from './ui/Header';

import type { PropsWithChildren } from 'react';

export function AppLayout({ children }: PropsWithChildren) {
	const [screenLess768] = useMediaQuery('(max-width: 768px)', {
		fallback: true,
		ssr: true,
	});

	return (
		<Grid minH="100vh" gridTemplateRows="auto 1fr auto">
			{screenLess768 ? <HeaderMobile /> : <Header />}
			<main>{children}</main>
			<Footer />
		</Grid>
	);
}
