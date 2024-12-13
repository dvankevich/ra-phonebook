import {
  Admin,
  CustomRoutes,
  Resource,
  // ListGuesser,
  // EditGuesser,
  // ShowGuesser,
} from "react-admin";
import { Route } from "react-router-dom";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import ContactList from "./ContactList";
import ContactEdit from "./ContactEdit";
import ContactCreate from "./ContactCreate";
import { Dashboard } from "./Dashboard";
import NotFound from "./NotFound";

export const App = () => (
  // <Admin
  //   layout={Layout}
  //   authProvider={authProvider}
  //   dataProvider={dataProvider}
  //   dashboard={Dashboard}
  // >
  // <Resource name="users" />
  // <Resource
  //   name="contacts"
  //   list={ContactList}
  //   edit={ContactEdit}
  //   create={ContactCreate}
  // />
  // </Admin>

  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <CustomRoutes>
      <Route path="/404" element={<NotFound />} />
      <Route path="/" element={<Dashboard />} />
    </CustomRoutes>
    <Resource name="users" />
    <Resource
      name="contacts"
      list={ContactList}
      edit={ContactEdit}
      create={ContactCreate}
    />
  </Admin>
);
