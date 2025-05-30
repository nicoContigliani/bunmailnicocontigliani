import { Router } from 'express';
import { sendEmailController } from '../apiservices/mail/mail.controller';

const router = Router();

router.post('/send-email', sendEmailController);

export default router;