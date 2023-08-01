import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import Container from './components/Container';
import fonts from './fonts';
import { breakpoints } from './breakpoints';
import Heading from './components/Heading';
import Text from './components/Text';
import Button from './components/Button';
import Radio from './components/Radio';
import Input from './components/Input';
import Tag from './components/Tag';

const VibeLabTheme = extendTheme({
	//------  components start  ------//
	components: {
		Container,
		Heading,
		Text,
		Button,
		Radio,
		Input,
		Tag,
	},
	//------  components end  ------//

	styles: {
		global: {
			body: {
				backgroundColor: colors.grey['100'],
				color: colors.grey['600'],
			},
		},
	},

	colors,
	fonts,
	breakpoints,
});

export default VibeLabTheme;
