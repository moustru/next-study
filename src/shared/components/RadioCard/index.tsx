import { Radio, Text } from '@chakra-ui/react';

type RadioCardModel = {
	value?: string;
	labelText: string;
	text: string;
};

export const RadioCard = ({ value, labelText, text }: RadioCardModel) => {
	return (
		<Radio variant="card" value={value}>
			<Text variant="sm">{labelText}</Text>
			<Text variant="lg">{text}</Text>
		</Radio>
	);
};
