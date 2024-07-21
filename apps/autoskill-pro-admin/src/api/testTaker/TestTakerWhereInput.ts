import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";
import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";

export type TestTakerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  role?: "Option1";
  scores?: ScoreListRelationFilter;
  answers?: AnswerListRelationFilter;
};
