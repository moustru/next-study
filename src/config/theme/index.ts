import { extendTheme } from '@chakra-ui/react';

// import { Button } from './components/Button';

const VibeLabTheme = extendTheme({
	//------  components start  ------//
	components: {
		// ...Button,
	},
	//------  components end  ------//

	//------  colors tokens start  ------//
	semanticTokens: {
		colors: {
			'text-primary': '#141516',
			'text-secondary': '#2C2A2A',
			'text-tertiary': '#7C858D',
			'text-quaternary': '#A0AEC0',
			'text-accent': 'blue.600',
			'text-on-accent': 'white',
			// success: 'green.500',
			// primary: {
			//   default: 'red.500',
			//   _dark: 'red.400',
			// },
			// secondary: {
			//   default: 'red.800',
			//   _dark: 'red.700',
			// },
		},
	},
	//------  colors tokens end  ------//
});

export default VibeLabTheme;
