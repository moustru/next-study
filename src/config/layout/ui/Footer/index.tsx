import css from './index.module.css';
import { Container, Text } from '@chakra-ui/react';

export const Footer = () => {
	return (
		<footer className={css.footer}>
			<Container>
				<Text>I'am footer</Text>
			</Container>
		</footer>
	);
};
