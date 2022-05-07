import { prisma } from "@prisma/client";
import { FeedbacksRepository,  FeedbackCreateData } from "../feedbacks-repository";

export class PrimaryFeedbackRepository implements FeedbacksRepository {
  async create({type, comment, screenshot}: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  }
}
