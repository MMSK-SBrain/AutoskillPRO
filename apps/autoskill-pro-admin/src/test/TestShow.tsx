import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TEST_TITLE_FIELD } from "./TestTitle";
import { TESTTAKER_TITLE_FIELD } from "../testTaker/TestTakerTitle";
import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";

export const TestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="totalMarks" source="totalMarks" />
        <ReferenceManyField
          reference="Question"
          target="testId"
          label="Questions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <TextField label="type" source="typeField" />
            <TextField label="marks" source="marks" />
            <ReferenceField label="test" source="test.id" reference="Test">
              <TextField source={TEST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Score" target="testId" label="Scores">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="score" source="score" />
            <ReferenceField
              label="testTaker"
              source="testtaker.id"
              reference="TestTaker"
            >
              <TextField source={TESTTAKER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="test" source="test.id" reference="Test">
              <TextField source={TEST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Answer" target="testId" label="Answers">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="answerContent" source="answerContent" />
            <TextField label="score" source="score" />
            <ReferenceField
              label="testTaker"
              source="testtaker.id"
              reference="TestTaker"
            >
              <TextField source={TESTTAKER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="question"
              source="question.id"
              reference="Question"
            >
              <TextField source={QUESTION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="test" source="test.id" reference="Test">
              <TextField source={TEST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
