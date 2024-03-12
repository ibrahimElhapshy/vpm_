import  {DataGrid, GridToolbar}  from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { rows,columns  } from "./data.js";
import Header from '../../components/Header';




const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%",
     mx: "auto",
      }}>
        <Header title={"INVOICES"} subTitle={"List of Invoice Balances"} />
      <DataGrid
      checkboxSelection
      slots={{ toolbar: GridToolbar }}
        rows={rows}
        
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}

export default Invoices;
