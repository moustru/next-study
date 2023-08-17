import { httpStrapi } from '@/config/api';

export class Service {
	private requests: Record<
		string,
		(url: string, method?: string) => Promise<unknown>
	> = {};

	constructor(private keys: string[]) {
		this.keys = keys;
		this.initRequests();
	}

	protected createRequest(url: string, method = 'GET') {
		switch (method) {
			case 'GET':
			default:
				return httpStrapi.get(url).json();
		}
	}

	protected initRequests() {
		this.keys.forEach((key) => {
			this.requests[key] = this.createRequest;
		});
	}

	async execute() {
		const res: Record<string, any> = {};

		const requestCalls = await Promise.allSettled(
			Object.values(this.requests).map((requestFn, i) =>
				requestFn(`/${this.keys[i]}`)
			)
		);

		requestCalls.forEach((reqCallObj, index) => {
			const requestKey = Object.keys(this.requests)[index];

			res[requestKey] =
				reqCallObj.status === 'fulfilled'
					? (reqCallObj.value as any).data.map((valItem: any) => ({
							id: valItem.id,
							...valItem.attributes,
					  }))
					: null;
		});

		return res;
	}
}
