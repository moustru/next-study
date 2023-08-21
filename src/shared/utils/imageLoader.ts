'use client';

import type { ImageLoaderProps } from 'next/image';

export default function myImageLoader({
	src,
	width,
	quality,
}: ImageLoaderProps) {
	return `${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${src}?w=${width}&q=${
		quality || 100
	}`;
}
