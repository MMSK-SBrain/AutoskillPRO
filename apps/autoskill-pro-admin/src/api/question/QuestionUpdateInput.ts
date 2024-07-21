import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";
import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { OptionUpdateManyWithoutQuestionsInput } from "./OptionUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  content?: string | null;
  typeField?: "Option1" | null;
  marks?: number | null;
  test?: TestWhereUniqueInput | null;
  answers?: AnswerUpdateManyWithoutQuestionsInput;
  options?: OptionUpdateManyWithoutQuestionsInput;
};
