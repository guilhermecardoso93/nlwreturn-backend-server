import express from "express";
import nodemailer from 'nodemailer'
import { prisma } from "./prisma";

const app = express();

app.use(express.json());


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7dd8e8c4a43636",
    pass: "a5490d8c9a8c52"
  }
})

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });

  transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: ' Diego Fernandes <guilhermecardosowork@gmail.com>',
    subject: 'Novo Feed',
    html: [
      `<p>Tipo do Feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
    ].join('\n')
  })

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("🚀 HTTP server Running!");
});
