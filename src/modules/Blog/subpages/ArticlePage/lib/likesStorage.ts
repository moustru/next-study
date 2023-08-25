import { useEffect, useState } from 'react';

export const useLikesStorage = () => {
	const [likesStorageSSR, setLikesStorageSSR] = useState<number[]>([]);

	useEffect(() => {
		if (window)
			setLikesStorageSSR(
				window.localStorage.getItem('likes')
					? JSON.parse(window.localStorage.getItem('likes') as string)
					: []
			);
	}, []);

	const _add = (articleId: number) => {
		localStorage.setItem(
			'likes',
			JSON.stringify([...likesStorageSSR, articleId])
		);

		setLikesStorageSSR([...likesStorageSSR, articleId]);
	};

	const _remove = (articleId: number) => {
		localStorage.setItem(
			'likes',
			JSON.stringify(
				likesStorageSSR.filter((arStorage) => arStorage !== articleId)
			)
		);

		setLikesStorageSSR(
			likesStorageSSR.filter((arStorage) => arStorage !== articleId)
		);
	};

	const _storageFnCurry = (articleId: number) => {
		return (callback: any) => {
			return callback(articleId);
		};
	};

	const isAlreadyLiked = (articleId: number) => {
		return likesStorageSSR.includes(articleId);
	};

	const handle = (articleId: number) => {
		const storageFn = _storageFnCurry(articleId);

		if (isAlreadyLiked(articleId)) storageFn(_remove);
		else storageFn(_add);
	};

	return {
		handle,
		isAlreadyLiked,
	};
};
