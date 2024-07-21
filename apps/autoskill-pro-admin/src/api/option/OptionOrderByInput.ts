import { SortOrder } from "../../util/SortOrder";

export type OptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  text?: SortOrder;
  isCorrect?: SortOrder;
  questionId?: SortOrder;
};
