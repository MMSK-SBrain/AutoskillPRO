import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";
import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { OptionCreateNestedManyWithoutQuestionsInput } from "./OptionCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  content?: string | null;
  typeField?: "Option1" | null;
  marks?: number | null;
  test?: TestWhereUniqueInput | null;
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
  options?: OptionCreateNestedManyWithoutQuestionsInput;
};
