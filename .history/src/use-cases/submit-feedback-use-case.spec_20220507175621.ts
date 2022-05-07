import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
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

  it("should not to be able to submit a feedback without a comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,kahdjkahjdhakj"
      })
    ).rejects.toThrow();
  });

  it("should not to be able to submit a feedback with a invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "test",
        screenshot: "test"
      })
    ).rejects.toThrow();
  });
});
