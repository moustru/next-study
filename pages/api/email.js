// import { type NextApiRequest, type NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// interface EmailProps {
// 	name: string;
// 	email: string;
// 	message: string;
// 	company: string;
// }

export default async function handler(req, res) {
	const requestBody = req.body;
	console.log(req.body);

	// const TEXT = `
	// 	<p><strong>Name:</strong> ${requestBody.name}</p>
	// 	<p><strong>E-mail:</strong> ${requestBody.email}</p>
	// 	<p><strong>Company:</strong> ${requestBody.company}</p>
	// 	<p><strong>Message:</strong> ${requestBody.message}</p>
	// 	`;

	const transporter = nodemailer.createTransport({
		host: process.env.NEXT_PUBLIC_MAIL_HOST,
		port: Number(process.env.NEXT_PUBLIC_MAIL_PORT),
		secure: false,
		auth: {
			user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
			pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: requestBody.email,
		to: process.env.NEXT_PUBLIC_MAIL_TO,
		subject: `Request | ${requestBody.name} | Vibe Lab `,
		text: 'Hello!',
	};

	transporter.sendMail(mailOptions, (error) => {
		if (error) {
			console.log(error);
			res.status(500).send(error);
		} else {
			res.send('Email sent');
		}
	});
}
