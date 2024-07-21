import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TestTakerWhereUniqueInput } from "../testTaker/TestTakerWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type ScoreWhereInput = {
  id?: StringFilter;
  score?: IntNullableFilter;
  testTaker?: TestTakerWhereUniqueInput;
  test?: TestWhereUniqueInput;
};
