import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';

interface MailData {
    id?: string;
    todo?: string;
    todos?: {
        host?: string;
        // Agrega aquí otras propiedades que esperas en 'todos'
    };
}

export const mailReturnHome = async (req: Request, res: Response) => {
    try {
        const { id, todo, todos }: MailData = req.body;

        console.log("🚀 ~ mailReturnHome ~ todos:", todos);
        console.log("🚀 ~ mailReturnHome ~ todo:", todo);

        if (!todo || !todos?.host) {
            return res.status(400).json({ error: 'Datos incompletos' });
        }

        const contentHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4/css/metro-all.min.css">
        <title>Document</title>
    </head>
    <body>
          <h1>Retorna de donde:</h1>
          <h3>email:</h3>${todo}  <br>
          <h3>header:</h3>${todos.host}  <br>
          <h3>Fecha y hora: </h3>${new Date()}
    </body>
    </html>
    `;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // Cambiado a true ya que estás usando el puerto 465 (SSL)
            auth: {
                user: 'nico.contigliani@gmail.com',
                pass: process.env.EMAIL_PASS || 'zlhixycegxoeuvdj' // Considera usar variables de entorno para esto
            }
        });

        const mailOptions = {
            from: `nico.contigliani@gmail.com`,
            to: `nico.contigliani@gmail.com`,
            subject: `${todo} abrió el mail - Sistema de envio automático - `,
            html: contentHTML,
        };

        // Usando promesas en lugar de callbacks
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        return res.status(200).json({
            success: true,
            message: 'Correo enviado exitosamente',
            info: info.response
        });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({
            success: false,
            error: 'Error al enviar el correo',
            details: error instanceof Error ? error.message : String(error)
        });
    }
};