import { TestTaker as TTestTaker } from "../api/testTaker/TestTaker";

export const TESTTAKER_TITLE_FIELD = "name";

export const TestTakerTitle = (record: TTestTaker): string => {
  return record.name?.toString() || String(record.id);
};
