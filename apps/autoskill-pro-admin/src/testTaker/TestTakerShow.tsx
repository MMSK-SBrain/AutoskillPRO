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

import { TESTTAKER_TITLE_FIELD } from "./TestTakerTitle";
import { TEST_TITLE_FIELD } from "../test/TestTitle";
import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";

export const TestTakerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="email" source="email" />
        <TextField label="role" source="role" />
        <ReferenceManyField
          reference="Score"
          target="testTakerId"
          label="Scores"
        >
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
        <ReferenceManyField
          reference="Answer"
          target="testTakerId"
          label="Answers"
        >
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
