import { ScoreUpdateManyWithoutTestTakersInput } from "./ScoreUpdateManyWithoutTestTakersInput";
import { AnswerUpdateManyWithoutTestTakersInput } from "./AnswerUpdateManyWithoutTestTakersInput";

export type TestTakerUpdateInput = {
  name?: string | null;
  email?: string | null;
  role?: "Option1" | null;
  scores?: ScoreUpdateManyWithoutTestTakersInput;
  answers?: AnswerUpdateManyWithoutTestTakersInput;
};
