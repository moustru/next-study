import { Icon } from '@chakra-ui/react';
import Image from 'next/image';

type CustomIconProps = {
	icon: string;
	width?: number;
	height?: number;
	color?: string;
};

export const CustomIcon = ({
	icon,
	width = 32,
	height = 32,
	color = '#26282B',
}: CustomIconProps) => {
	return (
		// <Icon width={width} height={height} color={color} />
		<Image
			src={`/icons/${icon}.svg`}
			alt={`Icon ${icon}`}
			width={width}
			height={height}
		/>
	);
};
