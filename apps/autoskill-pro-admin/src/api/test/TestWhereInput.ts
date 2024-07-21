import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";
import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";

export type TestWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  totalMarks?: IntNullableFilter;
  questions?: QuestionListRelationFilter;
  scores?: ScoreListRelationFilter;
  answers?: AnswerListRelationFilter;
};
