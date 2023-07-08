import type { AppProps } from 'next/app';

import { AppLayout } from '@/shared/ui/template/AppLayout';

const App = ({ Component, pageProps }: AppProps) => (
	<AppLayout>
		<Component {...pageProps} />
	</AppLayout>
);

export default App;
