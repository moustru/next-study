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
				<Grid
					gridTemplateColumns={{
						lg: 'repeat(3, 1fr)',
						md: 'repeat(2, 1fr)',
						xs: 'repeat(1, 1fr)',
					}}
					gap={{ lg: 8, xs: 4 }}
				>
					<RadioCard labelText="Нативное решение" text="Мобильное приложение" />
					<RadioCard labelText="Нативное решение" text="Веб-платформа" />
					<RadioCard labelText="Нативное решение" text="Аутстафф" />
					<RadioCard labelText="Нативное решение" text="Партнерство" />
					<RadioCard labelText="Нативное решение" text="AI и нейросети" />
					<RadioCard labelText="Нативное решение" text="CRM и ERP" />
				</Grid>
			</RadioGroup>

			<Grid
				gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' }}
				gap={{ lg: 8, xs: 4 }}
				mb={{ lg: 20, xs: 8 }}
			>
				<InputField label="Ваше имя" />
				<InputField label="Ваша электронная почта" />
			</Grid>

			<Flex justifyContent="flex-end" alignItems="center" gap={8}>
				<Text variant="sm" w={{ lg: 340, xs: 'auto' }}>
					Нажимая на кнопку, вы даете согласие на обработку персональных данных
				</Text>
				<Button size={{ lg: 'xl', xs: 'md' }} variant="blue" onClick={onOpen}>
					Написать нам
				</Button>
			</Flex>
		</SectionTemplate>
	);
};
