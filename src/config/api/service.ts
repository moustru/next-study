import { httpStrapi } from '@/config/api';

type RequestModel = {
	[key: string]: {
		params: string;
		// eslint-disable-next-line no-unused-vars
		fn: (url: string, method?: string) => Promise<unknown>;
	};
};

export class Service {
	private requests: RequestModel = {} as RequestModel;

	constructor(private keys: string[]) {
		this.keys = keys;
		this.initRequests();
	}

	protected createRequest(url: string, method = 'GET', params = '') {
		switch (method) {
			case 'GET':
			default:
				return httpStrapi.get(params ? `${url}?${params}` : url).json();
		}
	}

	protected initRequests() {
		const formattedKeys = this.keys.map((key) => key.split('?')[0]);

		this.keys.forEach((key, i) => {
			const keyWithParamsAsArray = key.split('?');

			this.requests[formattedKeys[i]] = {
				params:
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					keyWithParamsAsArray.length > 1 ? keyWithParamsAsArray.at(-1)! : '',
				fn: this.createRequest,
			};
		});
	}

	async execute() {
		const res: Record<string, any> = {};

		const requestCalls = await Promise.allSettled(
			Object.values(this.requests).map((request, i) =>
				request.fn(`/${this.keys[i]}`)
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
