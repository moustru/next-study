import { httpStrapi } from '@/config/api';

type TypeOption = 'add' | 'remove';

type SendLikeRequest = {
	articleId: number;
	likes: number;
	slug?: string;
	type?: TypeOption;
};

export const setLikePostState = async ({
	articleId,
	likes,
}: SendLikeRequest): Promise<any> => {
	return await httpStrapi
		.url(`/blog-article-pages/${articleId}`)
		.put({ data: { likes } })
		.json();
};
