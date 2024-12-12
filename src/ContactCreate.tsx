import {
  SimpleForm,
  TextInput,
  SaveButton,
  Toolbar,
  required,
  Create,
} from "react-admin";

const ContactCreate = () => (
  <Create>
    <SimpleForm
      toolbar={
        <Toolbar>
          <SaveButton />
        </Toolbar>
      }
    >
      <TextInput source="id" disabled sx={{ display: "none" }} />
      <TextInput source="name" validate={required()} />
      <TextInput source="number" validate={required()} />
    </SimpleForm>
  </Create>
);

export default ContactCreate;
