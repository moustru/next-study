import Head from 'next/head';
import { type PropsWithChildren } from 'react';

import { Footer } from './ui/Footer';
import { Header } from './ui/Header';
import { Grid } from '@chakra-ui/react';

export function AppLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Grid minH={'100vh'} gridTemplateRows={'auto 1fr auto'}>
				<Header />
				<main>{children}</main>
				<Footer />
			</Grid>
		</>
	);
}
