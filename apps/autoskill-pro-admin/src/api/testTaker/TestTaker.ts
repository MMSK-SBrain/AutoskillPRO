import { Score } from "../score/Score";
import { Answer } from "../answer/Answer";

export type TestTaker = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  role?: "Option1" | null;
  scores?: Array<Score>;
  answers?: Array<Answer>;
};
