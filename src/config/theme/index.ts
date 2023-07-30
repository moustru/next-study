import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import typography from './typography';
import { Container } from './components/container';
import fonts from './fonts';
import { breakpoints } from './breakpoints';

const VibeLabTheme = extendTheme({
	//------  components start  ------//
	components: {
		...Container,
	},
	//------  components end  ------//

	styles: {
		global: {
			body: {},
		},
	},

	colors,
	fonts,
	typography,
	breakpoints,
});

export default VibeLabTheme;
