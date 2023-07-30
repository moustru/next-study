import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import Container from './components/Container';
import fonts from './fonts';
import Text from './components/Text';
import Heading from './components/Heading';

/**
 * All Media queries
 *
 * [480 768,991, 1280, 1440]
 */

const VibeLabTheme = extendTheme({
	//------  components start  ------//
	components: {
		Container,
		Heading,
		Text,
	},
	//------  components end  ------//

	styles: {
		global: {
			body: {},
		},
	},

	colors,
	fonts,
});

export default VibeLabTheme;
