import * as yup from 'yup';

export const formSchema = yup.object({
	name: yup
		.string()
		.min(2, 'Имя должно содержать как минимум 2 символа')
		.required(),
	email: yup
		.string()
		.email('Некорректный e-mail')
		.required('Обязательное поле'),
});
