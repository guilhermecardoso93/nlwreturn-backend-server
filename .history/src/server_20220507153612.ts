import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7dd8e8c4a43636",
    pass: "a5490d8c9a8c52"
  }
});


app.listen(3333, () => {
  console.log("🚀 HTTP server Running!");
});
