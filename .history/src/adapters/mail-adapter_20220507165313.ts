export interface SendMailData {
  subject: string;
  body: string;
}

export interface MailAdpater {
  sendMail(): () => Promise<void>;
}
