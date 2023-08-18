import Link from 'next/link';

import css from './index.module.css';

import LogoSVG from 'public/images/logo.svg';

export const Logo = ({ extraClick }: { extraClick?: () => void }) => {
	return (
		<Link href="/" className={css.link}>
			<LogoSVG onClick={extraClick} className={css.logo} />
		</Link>
	);
};
