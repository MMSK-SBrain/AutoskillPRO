import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type OptionWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  isCorrect?: BooleanNullableFilter;
  question?: QuestionWhereUniqueInput;
};
