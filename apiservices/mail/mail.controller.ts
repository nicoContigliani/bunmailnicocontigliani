import type { Request, Response } from 'express';
import { sendEmail } from '../../services/mail.service';
import { ServiceArray } from '../../services/NodeMailer.service';

interface EmailRequest {
    email: string;
    subject: string;
    message: string;
}

export const sendEmailController = async (req: Request, res: Response) => {
    //   const { email
    //     , subject, message 
    // }: EmailRequest = req.body;

    try {
        await ServiceArray(req.body);
        // await sendEmail({ to: email, subject, text: message });
        res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
};