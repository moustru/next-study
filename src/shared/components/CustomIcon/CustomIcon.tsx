import Image from 'next/image';

type CustomIconProps = {
	icon: string;
	width?: number;
	height?: number;
};

export const CustomIcon = ({
	icon,
	width = 32,
	height = 32,
}: CustomIconProps) => {
	return (
		<Image
			src={`/icons/${icon}.svg`}
			alt={`Icon ${icon}`}
			width={width}
			height={height}
		/>
	);
};
