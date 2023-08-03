import { Input, Stack, Text } from '@chakra-ui/react';

type InputModel = {
	value?: string | number | readonly string[];
	label?: string;
	isDisabled?: boolean;
};

export const InputField = ({
	value,
	label = '',
	isDisabled = false,
}: InputModel) => {
	return (
		<Stack>
			{label && <Text variant="sm">{label}</Text>}
			<Input value={value} isDisabled={isDisabled} />
		</Stack>
	);
};
