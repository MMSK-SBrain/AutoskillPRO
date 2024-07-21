import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";
import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";

export type QuestionWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  typeField?: "Option1";
  marks?: IntNullableFilter;
  test?: TestWhereUniqueInput;
  answers?: AnswerListRelationFilter;
  options?: OptionListRelationFilter;
};
