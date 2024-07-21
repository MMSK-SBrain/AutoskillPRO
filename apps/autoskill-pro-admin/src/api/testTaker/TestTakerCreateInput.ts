import { ScoreCreateNestedManyWithoutTestTakersInput } from "./ScoreCreateNestedManyWithoutTestTakersInput";
import { AnswerCreateNestedManyWithoutTestTakersInput } from "./AnswerCreateNestedManyWithoutTestTakersInput";

export type TestTakerCreateInput = {
  name?: string | null;
  email?: string | null;
  role?: "Option1" | null;
  scores?: ScoreCreateNestedManyWithoutTestTakersInput;
  answers?: AnswerCreateNestedManyWithoutTestTakersInput;
};
