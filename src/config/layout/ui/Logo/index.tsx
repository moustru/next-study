import LogoSVG from 'public/images/logo.svg';
import Link from 'next/link';
import css from './index.module.css';

export const Logo = () => {
	return (
		<Link href="/" className={css.link}>
			<LogoSVG className={css.logo} />
		</Link>
	);
};
