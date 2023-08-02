import { ReactElement } from 'react';

import VkSVG from 'public/icons/social/vk.svg';
import FacebookSVG from 'public/icons/social/facebook.svg';
import Link from 'next/link';

interface IconMap {
	[key: string]: ReactElement;
}

const iconMap: IconMap = {
	vk: <VkSVG />,
	fc: <FacebookSVG />,
};

export const IconFactory = ({
	iconName,
	href,
}: {
	iconName: string;
	href: string;
}): ReactElement => {
	const Icon = <Link href={href}>{iconMap[iconName]}</Link>;

	if (!Icon) {
		throw new Error(`Icon "${iconName}" does not exist.`);
	}

	return Icon;
};
