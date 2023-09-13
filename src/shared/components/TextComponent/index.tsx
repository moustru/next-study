import { Text, type TextProps } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import styles from './index.module.css';

interface TextComponentModel extends TextProps {
	text: string;
}

export const TextComponent = ({ text, ...others }: TextComponentModel) => {
	return (
		<Text as="div" className={styles['common-text']} {...others}>
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
		</Text>
	);
};
