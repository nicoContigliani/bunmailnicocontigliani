import path from 'path';
import { mailReturnHome as mailReturnHomeService } from '../../services/mail.returnhome.service';
import type { Request, Response } from 'express';

interface MailData {
  id?: string;
  todo?: any | string[];  // Express query params can be string or string[]
  todos?: any;
}

export const mailReturnHome = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { todo } = req.query;
  const todos = req.headers;

  const mailData: MailData = {
    id,
    todo,
    todos,
  };

  try {
    await mailReturnHomeService(mailData);

    const iDir: any = path.parse(__dirname);
    const nDir: any = path.join(iDir.dir, 'public/images');

    if (!id) {
      res.status(400).json({ message: 'Missing parameter: id' });
      return;
    }

    res.sendFile(path.join(nDir, id));
  } catch (error) {
    console.error('Error in mailReturnHome:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
