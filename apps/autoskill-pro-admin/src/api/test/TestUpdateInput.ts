import { QuestionUpdateManyWithoutTestsInput } from "./QuestionUpdateManyWithoutTestsInput";
import { ScoreUpdateManyWithoutTestsInput } from "./ScoreUpdateManyWithoutTestsInput";
import { AnswerUpdateManyWithoutTestsInput } from "./AnswerUpdateManyWithoutTestsInput";

export type TestUpdateInput = {
  title?: string | null;
  description?: string | null;
  totalMarks?: number | null;
  questions?: QuestionUpdateManyWithoutTestsInput;
  scores?: ScoreUpdateManyWithoutTestsInput;
  answers?: AnswerUpdateManyWithoutTestsInput;
};
