//import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  //  SimpleList,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const ContactList = () => (
  <List pagination={false}>
    <Datagrid rowClick={false}>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      <TextField source="number" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// export const ContactList = () => {
//   const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
//   return (
//     <List pagination={false}>
//       {isSmall ? (
//         <SimpleList
//           primaryText={(record) => record.name}
//           secondaryText={(record) => record.number}
//         />
//       ) : (
//         <Datagrid rowClick={false}>
//           <TextField source="name" />
//           <TextField source="number" />
//           <EditButton />
//           <DeleteButton />
//         </Datagrid>
//       )}
//     </List>
//   );
// };

export default ContactList;
