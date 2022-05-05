import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });
  return res.send("Hello World!");
});

app.listen(3333, () => {
  console.log("🚀 HTTP server Running!");
});
