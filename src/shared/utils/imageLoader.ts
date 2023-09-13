'use client';

import type { ImageLoaderProps } from 'next/image';

export default function myImageLoader({
	src,
	width,
	quality = 100,
}: ImageLoaderProps) {
	return `${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${src}?w=${width}&q=${quality}`;
}
