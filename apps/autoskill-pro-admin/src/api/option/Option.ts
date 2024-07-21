import { Question } from "../question/Question";

export type Option = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  isCorrect: boolean | null;
  question?: Question | null;
};
