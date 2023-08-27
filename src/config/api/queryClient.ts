import {
	MutationCache,
	QueryClient,
	QueryCache,
	DefaultOptions,
} from '@tanstack/react-query';

const STALE_TIME = 36e4; // 1 hour
const CACHE_TIME = 18e6; // 5 hours

export const defaultOptions: DefaultOptions = {
	queries: {
		staleTime: STALE_TIME,
		cacheTime: CACHE_TIME,
		refetchOnMount: false,
		refetchOnReconnect: false,
		retry: 1,
		refetchOnWindowFocus: false,
	},
};

const mutationCache = new MutationCache({
	// eslint-disable-next-line no-unused-vars
	onError: (error, _variables, _context, mutation) => {
		if (mutation.options.onError) return;

		throw new Error(error as string);
	},
});
const queryCache = new QueryCache({
	onError: (error, query) => {
		if (query.state.data !== undefined) {
			throw new Error(error as string);
		}
	},
});

export const composeQueryClient = () =>
	new QueryClient({
		defaultOptions,
		mutationCache,
		queryCache,
	});
