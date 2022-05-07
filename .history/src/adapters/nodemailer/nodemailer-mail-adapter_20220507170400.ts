import { MailAdpater, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7dd8e8c4a43636",
    pass: "a5490d8c9a8c52"
  }
});

export class NodemailerMailAdapter implements MailAdpater {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: " Diego Fernandes <guilhermecardosowork@gmail.com>",
      subject,
      html: body
    });
  }
}

