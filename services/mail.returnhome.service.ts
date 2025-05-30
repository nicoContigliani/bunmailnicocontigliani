import nodemailer from 'nodemailer';

interface MailData {
    id?: string;
    todo?: string;
    todos: any;
}

export const mailReturnHome = async (data: any) => {
    const { id, todo, todos } = data;

    const contentHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4/css/metroui-all.min.css">
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
        secure: false,
        auth: {
            user: 'nico.contigliani@gmail.com',
            pass: 'zlhixycegxoeuvdj'
        }
    });

    const mailOptions = {
        from: `nico.contigliani@gmail.com`,
        to: `nico.contigliani@gmail.com`,
        subject: `${todo} abrió el mail - Sistema de envio automático - `,
        html: contentHTML,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }




}