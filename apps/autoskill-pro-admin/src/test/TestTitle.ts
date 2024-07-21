import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "title";

export const TestTitle = (record: TTest): string => {
  return record.title?.toString() || String(record.id);
};
