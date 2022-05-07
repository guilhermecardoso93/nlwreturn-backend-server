import express from 'express'
import nodemailer from "nodemailer";
import { prisma } from '@prisma/client';

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7dd8e8c4a43636",
    pass: "a5490d8c9a8c52"
  }
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: " Diego Fernandes <guilhermecardosowork@gmail.com>",
    subject: "Novo Feed",
    html: [
      `<div>`,
      `<p>Tipo do Feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join("\n")
  });

  return res.status(201).json({ data: feedback });
});