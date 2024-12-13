import {
  Admin,
  Resource,
  // ListGuesser,
  // EditGuesser,
  // ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import ContactList from "./ContactList";
import ContactEdit from "./ContactEdit";
import ContactCreate from "./ContactCreate";
import { Dashboard } from './Dashboard';

export const App = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource name="users" />
    <Resource
      name="contacts"
      list={ContactList}
      edit={ContactEdit}
      create={ContactCreate}
    />
  </Admin>
);
