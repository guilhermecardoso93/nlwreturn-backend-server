interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksREpository {
  create: (data:FeedbackCreateData) => void;
}
