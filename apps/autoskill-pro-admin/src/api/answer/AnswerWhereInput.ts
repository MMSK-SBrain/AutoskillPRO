import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TestTakerWhereUniqueInput } from "../testTaker/TestTakerWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type AnswerWhereInput = {
  id?: StringFilter;
  answerContent?: StringNullableFilter;
  score?: IntNullableFilter;
  testTaker?: TestTakerWhereUniqueInput;
  question?: QuestionWhereUniqueInput;
  test?: TestWhereUniqueInput;
};
