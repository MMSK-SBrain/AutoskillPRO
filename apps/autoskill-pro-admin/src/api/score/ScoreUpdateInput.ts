import { TestTakerWhereUniqueInput } from "../testTaker/TestTakerWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type ScoreUpdateInput = {
  score?: number | null;
  testTaker?: TestTakerWhereUniqueInput | null;
  test?: TestWhereUniqueInput | null;
};
