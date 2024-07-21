import { Question } from "../question/Question";
import { Score } from "../score/Score";
import { Answer } from "../answer/Answer";

export type Test = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  totalMarks: number | null;
  questions?: Array<Question>;
  scores?: Array<Score>;
  answers?: Array<Answer>;
};
