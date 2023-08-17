'use client';

type ImageLoaderModel = {
	src: string;
	width: number;
	quality: number;
};

export default function myImageLoader({
	src,
	width,
	quality,
}: ImageLoaderModel) {
	return `${process.env.NEXT_PUBLIC_STRAPI_URL}/${src}?w=${width}&q=${
		quality || 100
	}`;
}
