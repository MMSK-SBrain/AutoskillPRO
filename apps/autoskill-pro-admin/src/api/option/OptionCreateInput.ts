import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type OptionCreateInput = {
  text?: string | null;
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
};
