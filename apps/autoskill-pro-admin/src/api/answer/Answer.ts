import { TestTaker } from "../testTaker/TestTaker";
import { Question } from "../question/Question";
import { Test } from "../test/Test";

export type Answer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  answerContent: string | null;
  score: number | null;
  testTaker?: TestTaker | null;
  question?: Question | null;
  test?: Test | null;
};
