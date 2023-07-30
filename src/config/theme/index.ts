import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import typography from './typography';
import { Container } from './components/container';
import fonts from './fonts';

// import { Button } from './components/Button';

const VibeLabTheme = extendTheme({
	//------  components start  ------//
	components: {
		...Container,
	},

	styles: {
		global: {
			body: {},
		},
	},

	colors,
	fonts,
	typography,
});

export default VibeLabTheme;
