import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TESTTAKER_TITLE_FIELD } from "../testTaker/TestTakerTitle";
import { TEST_TITLE_FIELD } from "../test/TestTitle";

export const ScoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Scores"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
