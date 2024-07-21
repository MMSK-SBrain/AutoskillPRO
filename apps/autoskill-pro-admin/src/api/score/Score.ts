import { TestTaker } from "../testTaker/TestTaker";
import { Test } from "../test/Test";

export type Score = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number | null;
  testTaker?: TestTaker | null;
  test?: Test | null;
};
