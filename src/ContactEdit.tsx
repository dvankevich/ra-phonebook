import {
  Edit,
  SimpleForm,
  TextInput,
  SaveButton,
  Toolbar,
  required,
} from "react-admin";

const ContactEdit = () => (
  <Edit>
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
  </Edit>
);

export default ContactEdit;
