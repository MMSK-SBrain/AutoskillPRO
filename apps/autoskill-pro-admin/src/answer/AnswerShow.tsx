import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TESTTAKER_TITLE_FIELD } from "../testTaker/TestTakerTitle";
import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";
import { TEST_TITLE_FIELD } from "../test/TestTitle";

export const AnswerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
