import {
	Button,
	Flex,
	Grid,
	RadioGroup,
	Text,
	useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmailMethod } from '@/config/api/sendEmail';
import { useModal } from '@/config/providers/Modal.provider';
import { ModalSuccess } from '@/modules/Common/modals';
import { InputField } from '@/shared/components/InputField';
import { RadioCard } from '@/shared/components/RadioCard';

import { formSchema } from '../lib/validationSchema';
import { radios } from '../mocks';

export const SectionFormContent = ({ short = false, inModal = false }) => {
	const [solution, setSolution] = useState('');
	const { openModal } = useModal();
	const toast = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const { mutate: sendEmailData, isLoading: isLoadingSendingEmail } =
		useMutation(sendEmailMethod, {
			onSuccess: () => {
				openModal(<ModalSuccess />);
			},

			onError: () => {
				toast({
					title: 'Ошибка!',
					description: 'Не удалось отправить данные',
					status: 'error',
					isClosable: true,
				});
			},
		});

	const sendData = (data: any) => {
		sendEmailData(short ? { ...data } : { ...data, solution });
	};

	const disableButton = () => {
		if (short) return !isValid;

		return !solution || !isValid;
	};

	return (
		<>
			{!short && (
				<>
					<Text variant="sm" mb={4}>
						Выберите нативное решение
					</Text>
					<RadioGroup mb="54px" onChange={setSolution} value={solution}>
						<Grid
							gridTemplateColumns={{
								xl: 'repeat(3, 1fr)',
								lg: 'repeat(2, 1fr)',
								xs: 'repeat(1, 1fr)',
							}}
							gap={{ lg: 8, xs: 4 }}
						>
							{radios.map((radio, i) => (
								<RadioCard labelText="Нативное решение" {...radio} key={i} />
							))}
						</Grid>
					</RadioGroup>
				</>
			)}

			<form onSubmit={handleSubmit(sendData)}>
				<Grid
					gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
					gap={{ lg: 8, xs: 4 }}
					mb={inModal ? 14 : 20}
				>
					<InputField
						label="Ваше имя"
						validateData={register('name')}
						placeholder="Алексей"
						isInvalid={!!errors.name?.message}
						errorMsg={errors.name?.message}
					/>
					<InputField
						label="Ваша электронная почта"
						validateData={register('email')}
						placeholder="info@gmail.com"
						isInvalid={!!errors.email?.message}
						errorMsg={errors.email?.message}
					/>
				</Grid>

				<Flex
					justifyContent="flex-end"
					alignItems="center"
					direction={{ md: 'row', xs: 'column' }}
					gap={{ md: 8, xs: 4 }}
				>
					<Text
						variant="sm"
						w={{ lg: 340, xs: 'auto' }}
						textAlign={{ md: 'left', xs: 'center' }}
					>
						Нажимая на кнопку, вы даете согласие на обработку персональных
						данных
					</Text>
					<Button
						isLoading={isLoadingSendingEmail}
						isDisabled={disableButton()}
						size={{ lg: 'lg', xs: 'md' }}
						variant="blue"
						type="submit"
					>
						Написать нам
					</Button>
				</Flex>
			</form>
		</>
	);
};
