import { Container, Grid } from '@chakra-ui/react';

import { BottomBar } from './components/BottomBar';
import { MiddleBar } from './components/MiddleBar';
import { TopBar } from './components/TopBar';
import css from './index.module.css';

export const Footer = () => {
	return (
		<footer className={css.footer}>
			<Container paddingBlock={['40px', '40px', '40px', '60px', '60px']}>
				<Grid gap={10}>
					<TopBar />
					<MiddleBar />
					<BottomBar />
				</Grid>
			</Container>
		</footer>
	);
};
