import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  totalMarks?: SortOrder;
};
