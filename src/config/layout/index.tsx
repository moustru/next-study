import { Grid, useMediaQuery } from '@chakra-ui/react';
import { useState, type PropsWithChildren, useEffect } from 'react';

import { HeaderMobile } from './ui/Burger';
import { Footer } from './ui/Footer';
import { Header } from './ui/Header';

export function AppLayout({ children }: PropsWithChildren) {
	const [isDesktopOrTablet, setScreenSize] = useState<boolean>(false);
	const [largerThan768] = useMediaQuery('(min-width: 768px)');

	useEffect(() => {
		setScreenSize(largerThan768);
	});

	return (
		<Grid minH="100vh" gridTemplateRows="auto 1fr auto">
			{isDesktopOrTablet ? <Header /> : <HeaderMobile />}
			<main>{children}</main>
			<Footer />
		</Grid>
	);
}
