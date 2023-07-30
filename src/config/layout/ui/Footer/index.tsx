import { TopBar } from './components/TopBar';
import css from './index.module.css';
import { Container } from '@chakra-ui/react';

export const Footer = () => {
	return (
		<footer className={css.footer}>
			<Container>
				<TopBar />
			</Container>
		</footer>
	);
};
