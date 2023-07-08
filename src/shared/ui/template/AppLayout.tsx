import Head from 'next/head';
import { type PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

export function AppLayout({ children }: PropsWithChildren) {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Chulakov template next js" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
