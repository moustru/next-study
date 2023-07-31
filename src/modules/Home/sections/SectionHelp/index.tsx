import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const helpCases = [
	{
		title: 'Консультируем',
		text: 'для понимания ваших потребностей и разработки наилучшего решения для вашего бизнеса',
	},
	{
		title: 'Анализируем',
		text: 'для идентификации возможностей оптимизации и автоматизации ваших бизнес-процессов',
	},
	{
		title: 'Создаем',
		text: 'для создания детального технического задания, которое будет основой для разработки',
	},
	{
		title: 'Разрабатываем',
		text: 'для создания высококачественного программного продукта, соответствующего вашим требованиям',
	},
	{
		title: 'Тестируем',
		text: 'для обеспечения высокого качества разрабатываемого продукта',
	},
	{
		title: 'Интегрируем',
		text: 'для успешной интеграции и внедрения разработанных решений в вашу существующую инфраструктуру',
	},
	{
		title: 'Поддерживаем',
		text: 'для обеспечения постоянной технической поддержки',
	},
	{
		title: 'Масштабируем',
		text: 'для обеспечения масштабируемости продукта и его модернизации',
	},
];

const addZeroBeforeDigit = (digit: number): string =>
	digit.toString().padStart(2, '0');

export const SectionHelp = ({ ...others }) => {
	return (
		<SectionTemplate title="Чем мы помогаем?" {...others}>
			<Grid templateColumns="repeat(4, 1fr)" rowGap={20} columnGap={6}>
				{helpCases.map(({ title, text }, i) => (
					<GridItem key={title + i}>
						<Text mb={5}>{addZeroBeforeDigit(i + 1)}</Text>
						<Heading as="h3" variant="h3" color="basic.200" mb={4}>
							{title}
						</Heading>
						<Text variant="md">{text}</Text>
					</GridItem>
				))}
			</Grid>
		</SectionTemplate>
	);
};
