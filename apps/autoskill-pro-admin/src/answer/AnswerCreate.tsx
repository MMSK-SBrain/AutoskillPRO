import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TestTakerTitle } from "../testTaker/TestTakerTitle";
import { QuestionTitle } from "../question/QuestionTitle";
import { TestTitle } from "../test/TestTitle";

export const AnswerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="answerContent" multiline source="answerContent" />
        <NumberInput step={1} label="score" source="score" />
        <ReferenceInput
          source="testTaker.id"
          reference="TestTaker"
          label="testTaker"
        >
          <SelectInput optionText={TestTakerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
        <ReferenceInput source="test.id" reference="Test" label="test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
