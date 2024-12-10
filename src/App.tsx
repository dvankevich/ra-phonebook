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

export const App = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" />
  </Admin>
);
