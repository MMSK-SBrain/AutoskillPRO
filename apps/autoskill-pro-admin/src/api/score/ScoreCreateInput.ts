import { TestTakerWhereUniqueInput } from "../testTaker/TestTakerWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type ScoreCreateInput = {
  score?: number | null;
  testTaker?: TestTakerWhereUniqueInput | null;
  test?: TestWhereUniqueInput | null;
};
