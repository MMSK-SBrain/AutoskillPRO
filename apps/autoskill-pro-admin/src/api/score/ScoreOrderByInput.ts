import { SortOrder } from "../../util/SortOrder";

export type ScoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  score?: SortOrder;
  testTakerId?: SortOrder;
  testId?: SortOrder;
};
