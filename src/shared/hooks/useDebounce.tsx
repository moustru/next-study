import { useCallback, useRef } from 'react';

export const useDebounce = <T extends any[]>(
	func: (...args: T) => void,
	delay: number
) => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	return useCallback(
		(...args: T) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				func(...args);
			}, delay);
		},
		[func, delay]
	);
};
