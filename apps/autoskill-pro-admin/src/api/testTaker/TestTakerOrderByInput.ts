import { SortOrder } from "../../util/SortOrder";

export type TestTakerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  role?: SortOrder;
};
