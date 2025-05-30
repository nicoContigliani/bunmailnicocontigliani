import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { formating } from './FormatingDataRecluter.service';

dotenv.config();

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    path: string;
  }>;
}

interface MailParams {
  email: string;
  addressee: string;
  message: string;
  template?: string;
}

interface MailReturnParams {
  id: string;
  todo: string;
  todos: any;
}

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    auth: {
      user: 'nico.contigliani@gmail.com',
      pass: process.env.EMAIL_PASS || 'zlhixycegxoeuvdj'
    }
  });
};

const generateEmailTemplate = (email: string, company: string) => {
  const url = process.env.URL_WWW_PRODUCT || "localhost:3000";
  
  return `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="x-apple-disable-message-reformatting">
        <title></title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700" rel="stylesheet">
        <style>
            /* All your CSS styles here */
            html, body { margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 110% !important; background: #f1f1f1d1; }
            * { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
            /* ... rest of your CSS ... */
        </style>
    </head>
    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;">
        <center style="width: 100%; background-color: #f1f1f1;">
            <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
                &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
            <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                <!-- Email content -->
                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                    <tr>
                        <td valign="top" class="bg_white" style="padding: 1em 2.5em 0 2.5em;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td class="logo" style="text-align: center;">
                                        <h1><a href="#">Nicolás Contigliani</a></h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" class="hero bg_white" style="padding: 2em 0 4em 0;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="padding: 0 2.5em; text-align: center; padding-bottom: 3em;">
                                        <div class="text">
                                            <h2>Desarrollador FullStack</h2>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="text-align: left;">
                                        <div class="text-author">
                                            <img src="https://media.licdn.com/dms/image/C4D03AQEw4rHITovopw/profile-displayphoto-shrink_800_800/0/1516924717705?e=1684368000&v=beta&t=d1Owk3eNWJ0TaEQHixhkZtRlEh_FPEckSOSCy41WruQ"
                                                alt=""
                                                style="width: 100px; max-width: 600px; height: auto; margin: auto; display: block;">
                                            <h3 class="name">
                                               ${company}
                                                RRHH
                                                <hr />
                                                Estimado/a responsable de recursos humanos,me pongo en contacto con usted,
                                                tras haber encontrado la vacante abierta para el puesto de desarrollador
                                                FullStack. Adjunto mi currículum vitae para así darle un breve contexto de
                                                mi perfil como profesional.<br />
                                                Me gustaría poder concertar una reunión con usted para poder hablar más
                                                detenidamente sobre objetivos de la empresa a corto y mediano plazo,<br />
                                                al mismo tiempo que resuelva sus posibles dudas en relación a mis
                                                capacidades.<br />
                                                Muchas gracias por su tiempo quedando a la espera de su respuesta.<br />
                                                Saludos atentamente.<br />
                                                Nicolás Contigliani
                                                <br><br>
                                                <div align="center">
                                                    <a target="_blank" href="https://www.linkedin.com/in/nicolas-contigliani/"
                                                        style="text-decoration: none;"><img border="0" vspace="0" hspace="0"
                                                            style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
                    color: #000000;" alt="F" title="Linkedin" width="44" height="44"
                                                            src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360">
                                                    </a>
                                                    <a target="_blank" href="https://github.com/nicoContigliani"
                                                        style="text-decoration: none;"><img border="0" vspace="0" hspace="0"
                                                            style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
                        color: #000000;" alt="T" title="Github" width="44" height="44"
                                                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></a>
                                                    <a target="_blank" href="https://nicolascontiglianidev.netlify.app/"
                                                        style="text-decoration: none;"><img border="0" vspace="0" hspace="0"
                                                            style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
    color: #000000;" alt="T" title="Portafolio" width="44" height="44"
                                                            src="https://cdn-icons-png.flaticon.com/512/39/39295.png"></a>
                                                </div>
                                            </h3>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <!-- Social links and footer -->
                <table border="0" cellpadding="0" cellspacing="0" align="center" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit; max-width: 560px;" class="wrapper">
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; padding-top: 25px;" class="social-icons">
                            <table width="256" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse: collapse; border-spacing: 0; padding: 0;">
                                <tr>
                                    <td align="center" valign="middle" style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                                        <a target="_blank" href="https://raw.githubusercontent.com/konsav/email-templates/" style="text-decoration: none;"><img border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block; color: #000000;" alt="F" title="Facebook" width="44" height="44" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/facebook.png"></a>
                                    </td>
                                    <td align="center" valign="middle" style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                                        <a target="_blank" href=" https://api.whatsapp.com/send?phone=5492612444106" style="text-decoration: none;"><img border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block; color: #000000;" alt="T" title="Twitter" width="44" height="44" src="https://w7.pngwing.com/pngs/353/973/png-transparent-whatsapp-social-icons-grey-icon.png"></a>
                                    </td>
                                    <td align="center" valign="middle" style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                                        <a target="_blank" href="https://raw.githubusercontent.com/konsav/email-templates/" style="text-decoration: none;"><img border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block; color: #000000;" alt="G" title="Google Plus" width="44" height="44" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/googleplus.png"></a>
                                    </td>
                                    <td align="center" valign="middle" style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                                        <a target="_blank" href="https://raw.githubusercontent.com/konsav/email-templates/" style="text-decoration: none;"><img border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block; color: #000000;" alt="I" title="Instagram" width="44" height="44" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/instagram.png"></a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%; padding-top: 20px; padding-bottom: 20px; color: #999999; font-family: sans-serif;" class="footer">
                            Nicolas Contigliani@ derechos reservados
                            <img width="1" height="1" border="0" vspace="0" hspace="0" style="margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/tracker.png" />
                        </td>
                    </tr>
                </table>
            </div>
        </center>
        <img src="${url}/resources/alma.jpg?todo=${email}" alt="" srcset="" style="display: none">
    </body>
    </html>
  `;
};

export const mailArray = async (email: string): Promise<any[]> => {
  const result: any[] = [];
  const DataReturn = formating(email);
  const contentHTML = generateEmailTemplate(email, DataReturn?.company || '');

  const mailOptions: MailOptions = {
    from: `nico.contigliani@gmail.com`,
    to: email,
    subject: 'Nicolás Contigliani Desarrollador FullStack',
    html: contentHTML,
    attachments: [
      {
        filename: 'Nicolas_Contigliani_Analista_Programador_De_Sistemas.pdf',
        path: __dirname + '/Nicolas_Contigliani_Analista_Programador_De_Sistemas.pdf',
      }
    ]
  };

  try {
    const transporter = createTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    result.push(info);
  } catch (error) {
    console.error(error);
    result.push(error);
  }

  return result;
};

export const ServiceArray = async (emails: string[]): Promise<any[]> => {
  const uniqueEmails = [...new Set(emails)];
  const results: any[] = [];
  const BATCH_SIZE = 5;
  
  for (let i = 0; i < uniqueEmails.length; i += BATCH_SIZE) {
    const batch = uniqueEmails.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(
      batch.map(email => mailArray(email))
    );
    results.push(...batchResults.flat());
    
    if (i + BATCH_SIZE < uniqueEmails.length) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  return results;
};

// Other functions (mail, mailReturnHome) would follow the same pattern