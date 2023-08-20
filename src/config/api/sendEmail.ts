import wretch from 'wretch';

export const sendEmailMethod = async ({ name, email, solution }: any) =>
	await wretch()
		.url('/api/email')
		.post({ name, email, solution })
		.json()
		.catch((err) => {
			throw new Error(err);
		});
