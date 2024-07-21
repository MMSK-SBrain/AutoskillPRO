import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TestTakerTitle } from "../testTaker/TestTakerTitle";
import { TestTitle } from "../test/TestTitle";

export const ScoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
