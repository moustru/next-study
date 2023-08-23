import nodemailer from 'nodemailer';

const solutions = [
	{ value: 'mobile', text: 'Мобильное приложение' },
	{ value: 'web', text: 'Веб-платформа' },
	{ value: 'outstaff', text: 'Аутстафф' },
	{ value: 'partners', text: 'Партнерство' },
	{ value: 'ai', text: 'AI и нейросети' },
	{ value: 'crmerp', text: 'CRM и ERP' },
];

const getSolution = (value) => {
	return solutions.find((solution) => solution.value === value)?.text;
};

export default async function handler(req, res) {
	const requestBody = req.body;

	const TEXT = () => {
		if (requestBody.solution) {
			return `
			<p><strong>Имя:</strong> ${requestBody.name}</p>
			<p><strong>E-mail:</strong> ${requestBody.email}</p>
			<p><strong>Решение:</strong> ${getSolution(requestBody.solution)}</p>
			`;
		}

		return `
		<p><strong>Имя:</strong> ${requestBody.name}</p>
		<p><strong>E-mail:</strong> ${requestBody.email}</p>
		`;
	};

	const transporter = nodemailer.createTransport({
		host: process.env.NEXT_PUBLIC_MAIL_HOST,
		port: Number(process.env.NEXT_PUBLIC_MAIL_PORT),
		secure: true,
		auth: {
			user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
			pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.NEXT_PUBLIC_MAIL_USERNAME,
		to: process.env.NEXT_PUBLIC_MAIL_TO,
		subject: requestBody.solution
			? `Новая заявка | Vibe Lab `
			: 'Стать частью команды | Vibe Lab',
		text: 'Новое обращение',
		html: TEXT(),
	};

	transporter.sendMail(mailOptions, (error) => {
		if (error) {
			res.status(500).send(error);
		} else {
			res.send(requestBody);
		}
	});
}
