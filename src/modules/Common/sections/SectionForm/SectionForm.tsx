import { Text, RadioGroup, Grid, Flex, Button } from '@chakra-ui/react';

import { InputField } from '@/shared/components/InputField';
import { RadioCard } from '@/shared/components/RadioCard';

import { useModal } from '../../providers/Modal.provider';
import { SectionTemplate } from '../SectionTemplate';

export const SectionForm = () => {
	const { onOpen } = useModal();

	return (
		<SectionTemplate title="Оставьте вашу заявку">
			<Text variant="sm" mb={4}>
				Выберите нативное решение
			</Text>
			<RadioGroup mb="54px">
				<Grid gridTemplateColumns="repeat(3, 1fr)" gap={8}>
					<RadioCard
						labelText="Нативное решение"
						text="Мобильное приложение"
					/>
					<RadioCard
						labelText="Нативное решение"
						text="Веб-платформа"
					/>
					<RadioCard labelText="Нативное решение" text="Аутстафф" />
					<RadioCard
						labelText="Нативное решение"
						text="Партнерство"
					/>
					<RadioCard
						labelText="Нативное решение"
						text="AI и нейросети"
					/>
					<RadioCard labelText="Нативное решение" text="CRM и ERP" />
				</Grid>
			</RadioGroup>

			<Grid gridTemplateColumns="repeat(2, 1fr)" gap={8} mb={20}>
				<InputField label="Ваше имя" />
				<InputField label="Ваша электронная почта" />
			</Grid>

			<Flex justifyContent="flex-end" alignItems="center" gap={8}>
				<Text variant="sm" w={340}>
					Нажимая на кнопку, вы даете согласие на обработку
					персональных данных
				</Text>
				<Button size="xl" variant="blue" onClick={onOpen}>
					Написать нам
				</Button>
			</Flex>
		</SectionTemplate>
	);
};
