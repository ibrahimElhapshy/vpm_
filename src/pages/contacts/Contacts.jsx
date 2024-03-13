import  {DataGrid, GridToolbar}  from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { rows,columns  } from "./data.js";
import Header from "../../components/Header";



const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: "96%",
     my: "auto",
      }}>

        <Header title={"CONTACTS"} subTitle={"List of Contacts for Future Reference"} />
      <DataGrid
      slots={{ toolbar: GridToolbar }}
        rows={rows}
        
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}

export default Contacts;
