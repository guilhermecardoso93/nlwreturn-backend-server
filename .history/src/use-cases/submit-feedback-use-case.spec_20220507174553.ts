import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";
const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {} },
  { sendMail: async () => {} }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Example",
        screenshot: "data:image/png;base64,kahdjkahjdhakj"
      })
    ).resolves.not.toThrow();
  });

  it("should not to be able to submit a feedback without a type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Example",
        screenshot: "data:image/png;base64,kahdjkahjdhakj"
      })
    ).rejects.toThrow();
  });
});
