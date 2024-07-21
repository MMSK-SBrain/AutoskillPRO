import { TestTakerWhereInput } from "./TestTakerWhereInput";
import { TestTakerOrderByInput } from "./TestTakerOrderByInput";

export type TestTakerFindManyArgs = {
  where?: TestTakerWhereInput;
  orderBy?: Array<TestTakerOrderByInput>;
  skip?: number;
  take?: number;
};
