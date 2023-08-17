import wretch from 'wretch';

const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!baseURL) throw new Error('there is no baseURL');

const httpStrapi = wretch().url(baseURL);

export { httpStrapi };
