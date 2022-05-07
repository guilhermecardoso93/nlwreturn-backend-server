import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase{
  constructor(
    feedbackRepository: FeedbacksRepository
  ){}
    async execute(request: SubmitFeedbackUseCaseRequest){
    const { type, comment, screenshot} = request;


  }
}