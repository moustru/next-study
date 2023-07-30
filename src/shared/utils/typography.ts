export const setTypographyVariant = (
	size: number,
	height: number,
	weight: number
) => ({
	fontSize: `${size}px`,
	lineHeight: `${height}px`,
	fontWeight: weight,
});
