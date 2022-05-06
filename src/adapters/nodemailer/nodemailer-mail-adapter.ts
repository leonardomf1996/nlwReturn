import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
      user: "7255fb24c5cb6e",
      pass: "90edcd653d24f7"
   }
});

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Leonardo Furtado <leonardo.furtado@gmail.com>',
      subject,
      html: body,
   })
   }

}