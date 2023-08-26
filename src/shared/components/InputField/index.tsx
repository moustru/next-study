import { Input, Stack, Text } from '@chakra-ui/react';

import type { UseFormRegisterReturn } from 'react-hook-form';

type InputModel = {
	value?: string | number | readonly string[];
	label?: string;
	isDisabled?: boolean;
	isInvalid?: boolean;
	placeholder?: string;
	validateData?: UseFormRegisterReturn;
	errorMsg?: string;
};

export const InputField = ({
	value,
	label = '',
	isDisabled = false,
	isInvalid = false,
	placeholder = '',
	validateData = undefined,
	errorMsg = '',
}: InputModel) => {
	return (
		<Stack>
			{label && <Text variant="sm">{label}</Text>}
			<Input
				value={value}
				outline="1px"
				isDisabled={isDisabled}
				isInvalid={isInvalid}
				placeholder={placeholder}
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
