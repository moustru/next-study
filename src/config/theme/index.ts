import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import colors from './colors';
import Button from './components/Button/Button';
import IconButton from './components/Button/IconButton';
import Container from './components/Container';
import Heading from './components/Heading';
import Input from './components/Input';
import Modal from './components/Modal';
import Radio from './components/Radio';
import Tabs from './components/Tabs';
import Tag from './components/Tag';
import Text from './components/Text';
import fonts from './fonts';

const VibeLabTheme = extendTheme({
	// ------  components start  ------//
	components: {
		Tag,
		Tabs,
		Text,
		Input,
		Radio,
		Button,
		Heading,
		Container,
		IconButton,
		Modal,
	},
	// ------  components end  ------//

	styles: {
		global: {
			body: {
				backgroundColor: colors.grey['100'],
				color: colors.grey['600'],
			},

			main: {
				maxWidth: '100vw',
			},
		},
	},

	colors,
	fonts,
	breakpoints,
});

export default VibeLabTheme;
