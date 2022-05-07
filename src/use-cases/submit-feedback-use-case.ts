import { MailAdpater } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: FeedbacksRepository,
    private mailAdapater: MailAdpater
  ) {}
  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if(!type){
      throw new Error('Type is required.')
    }

    if(!comment){
      throw new Error('Comment is required.')
    }

    if(screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error('Invalid Screenshot format')
    }

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot
    });

    await this.mailAdapater.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div>`,
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`
      ].join("\n")
    });
  }
}
