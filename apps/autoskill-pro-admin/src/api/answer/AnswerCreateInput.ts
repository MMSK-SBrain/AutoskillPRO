import { TestTakerWhereUniqueInput } from "../testTaker/TestTakerWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type AnswerCreateInput = {
  answerContent?: string | null;
  score?: number | null;
  testTaker?: TestTakerWhereUniqueInput | null;
  question?: QuestionWhereUniqueInput | null;
  test?: TestWhereUniqueInput | null;
};
