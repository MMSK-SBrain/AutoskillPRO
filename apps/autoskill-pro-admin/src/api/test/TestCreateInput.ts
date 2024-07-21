import { QuestionCreateNestedManyWithoutTestsInput } from "./QuestionCreateNestedManyWithoutTestsInput";
import { ScoreCreateNestedManyWithoutTestsInput } from "./ScoreCreateNestedManyWithoutTestsInput";
import { AnswerCreateNestedManyWithoutTestsInput } from "./AnswerCreateNestedManyWithoutTestsInput";

export type TestCreateInput = {
  title?: string | null;
  description?: string | null;
  totalMarks?: number | null;
  questions?: QuestionCreateNestedManyWithoutTestsInput;
  scores?: ScoreCreateNestedManyWithoutTestsInput;
  answers?: AnswerCreateNestedManyWithoutTestsInput;
};
