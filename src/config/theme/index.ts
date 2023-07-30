import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import Container from './components/Container';
import fonts from './fonts';
import { breakpoints } from './breakpoints';
import Heading from './components/Heading';
import Text from './components/Text';

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
	breakpoints,
});

export default VibeLabTheme;
