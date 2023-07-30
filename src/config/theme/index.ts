import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import typography from './typography';
import { Container } from './components/container';

/**
 * All Media queries
 *
 * [480 768,991, 1280, 1440]
 */

const VibeLabTheme = extendTheme({
	//------  components start  ------//
	components: {
		...Container,
	},
	//------  components end  ------//

	styles: {
		global: {
			body: {
				// ...
			},
		},
	},

	colors,
	typography,
});

export default VibeLabTheme;
