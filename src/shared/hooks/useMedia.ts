import { useMediaQuery } from '@chakra-ui/react';

export const useMedia = (minWidth: number) => {
	return useMediaQuery(`(min-width): ${minWidth}px`);
};
