app.post("/feedbacks", async (req, res) => {
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
