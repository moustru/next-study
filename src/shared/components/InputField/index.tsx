import { Input, Stack, Text } from '@chakra-ui/react';

import type { UseFormRegisterReturn } from 'react-hook-form';

type InputModel = {
	value?: string | number | readonly string[];
	label?: string;
	isDisabled?: boolean;
	isInvalid?: boolean;
	validateData?: UseFormRegisterReturn;
	errorMsg?: string;
};

export const InputField = ({
	value,
	label = '',
	isDisabled = false,
	isInvalid = false,
	validateData = undefined,
	errorMsg = '',
}: InputModel) => {
	return (
		<Stack>
			{label && <Text variant="sm">{label}</Text>}
			<Input
				value={value}
				isDisabled={isDisabled}
				isInvalid={isInvalid}
				{...validateData}
				errorBorderColor="error.100"
			/>
			{errorMsg && (
				<Text color="error.100" variant="lg">
					{errorMsg}
				</Text>
			)}
		</Stack>
	);
};
