export const setTypographyVariant = (
	size: number,
	height: number,
	weight = 400
) => ({
	fontSize: `${size}px`,
	lineHeight: `${height}px`,
	fontWeight: weight,
});
