/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RefObject, useEffect, useRef } from 'react';

export const useDimensions = (ref: RefObject<HTMLElement>) => {
	const dimensions = useRef({ width: 0, height: 0 });

	useEffect(() => {
		dimensions.current.width = ref.current!.offsetWidth;
		dimensions.current.height = ref.current!.offsetHeight;
	}, [ref]);

	return dimensions.current;
};
