import wretch from 'wretch';

import { httpStrapi } from '.';

export const sendEmailMethod = async ({ name, email, solution }: any) =>
	await wretch()
		.url('/api/email')
		.post({ name, email, solution })
		.json()
		.catch((err) => {
			throw new Error(err);
		});
