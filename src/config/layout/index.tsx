import { Grid, useMediaQuery } from '@chakra-ui/react';
import { useState, type PropsWithChildren, useEffect } from 'react';

import { HeaderMobile } from './ui/Burger';
import { Footer } from './ui/Footer';
import { Header } from './ui/Header';

export function AppLayout({ children }: PropsWithChildren) {
	const [isPhone, setScreenSize] = useState<boolean>(false);
	const [screenLess768] = useMediaQuery('(max-width: 768px)');

	useEffect(() => {
		setScreenSize(screenLess768);
	}, [isPhone]);

	return (
		<Grid minH="100vh" gridTemplateRows="auto 1fr auto">
			{isPhone ? <HeaderMobile /> : <Header />}
			<main>{children}</main>
			<Footer />
		</Grid>
	);
}
