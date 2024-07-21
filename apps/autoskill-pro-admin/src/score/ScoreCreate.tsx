import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TestTakerTitle } from "../testTaker/TestTakerTitle";
import { TestTitle } from "../test/TestTitle";

export const ScoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="score" source="score" />
        <ReferenceInput
          source="testTaker.id"
          reference="TestTaker"
          label="testTaker"
        >
          <SelectInput optionText={TestTakerTitle} />
        </ReferenceInput>
        <ReferenceInput source="test.id" reference="Test" label="test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
