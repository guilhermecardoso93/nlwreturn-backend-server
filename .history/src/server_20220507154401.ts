import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());



app.listen(3333, () => {
  console.log("🚀 HTTP server Running!");
});
