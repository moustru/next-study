import { MiddleBar } from './components/MiddleBar';
import { TopBar } from './components/TopBar';
import { BottomBar } from './components/BottomBar';
import css from './index.module.css';
import { Container, Grid } from '@chakra-ui/react';

export const Footer = () => {
	return (
		<footer className={css.footer}>
			<Container paddingBlock={['40px', '40px', '40px', '60px', '60px']}>
				<Grid gap={6}>
					<TopBar />
					<MiddleBar />
					<BottomBar />
				</Grid>
			</Container>
		</footer>
	);
};
