import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import ContactList from "./ContactList";

export const App = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" />
    <Resource name="contacts" list={ContactList} />
  </Admin>
);
