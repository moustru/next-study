import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import colors from './colors';
import Button from './components/Button/Button';
import IconButton from './components/Button/IconButton';
import Container from './components/Container';
import Heading from './components/Heading';
import Input from './components/Input';
import Radio from './components/Radio';
import Tag from './components/Tag';
import Text from './components/Text';
import fonts from './fonts';

const VibeLabTheme = extendTheme({
	// ------  components start  ------//
	components: {
		Container,
		Heading,
		Text,
		Button,
		IconButton,
		Radio,
		Input,
		Tag,
	},
	// ------  components end  ------//

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
