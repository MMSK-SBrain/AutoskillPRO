import { Test } from "../test/Test";
import { Answer } from "../answer/Answer";
import { Option } from "../option/Option";

export type Question = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  typeField?: "Option1" | null;
  marks: number | null;
  test?: Test | null;
  answers?: Array<Answer>;
  options?: Array<Option>;
};
