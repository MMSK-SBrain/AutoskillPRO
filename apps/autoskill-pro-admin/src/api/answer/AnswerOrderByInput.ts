import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  answerContent?: SortOrder;
  score?: SortOrder;
  testTakerId?: SortOrder;
  questionId?: SortOrder;
  testId?: SortOrder;
};
