import Link from 'next/link';

import css from './index.module.css';

import LogoSVG from 'public/images/logo.svg';

export const Logo = ({
	extraClick,
	location,
}: {
	extraClick?: () => void;
	location: 'footer' | 'header';
}) => {
	return (
		<Link href="/" className={css.link}>
			<LogoSVG
				onClick={extraClick}
				className={css.logo}
				data-placement={location}
			/>
		</Link>
	);
};
