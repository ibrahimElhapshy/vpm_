import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  Button,
  Stack,
  // ButtonGroup,
} from "@mui/material";
import { PersonAddRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";

import HeaderTitle from "../../components/Header";

const baseURL = "https://portal.profitsway.net/New_Parking/public/api";

const TOKEN = sessionStorage.getItem("token");
const reqHeader = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + TOKEN,
    
  },
};

export const Admin = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const [row, setRow] = useState([]);


  const columns = [
    {
      field: "name",
      headerName: t("Name"),
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: t("Email"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: t("PhoneNumber"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createAt",
      headerName: t("CreateAt"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "actions",
      headerName: t("Actions"),
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return (
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              borderRadius: "3px",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <IconButton
              color="success"
              sx={{
                p: "5px",
                maxWidth: "99px",
                borderRadius: "3px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <BorderColorOutlinedIcon
                sx={{
                  color: "green",
                }}
                fontSize="small"
              />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const res = await axios.get(
      `${baseURL}/admin/admins/search`,
      reqHeader
    );
    setRow(res.data.data);
    console.log(res.data.data);
    // setMeta(res.data.meta);
  };

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          mb: 5,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <HeaderTitle title={t("Admins")} subTitle={""} />
        <Button
          variant="contained"
          size="small"
          startIcon={<PersonAddRounded />}
          sx={{
            textAlign: "center",
            display: "flex",
            // @ts-ignore
            bgcolor: theme.palette.primary.dark,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {t("AddNewAdmin")}
        </Button>

        {/* <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={OpenAlert}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar> */}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
            width: "50%",
            justifyContent: "center",
            textAlign: "center",
            mt: 1,
          }}
        >
          <TextField
            sx={{ m: "0.3px", borderLeft: "0px" }}
            autoFocus
            margin="dense"
            id="search"
            label={t("Search")}
            type="text"
            fullWidth
            variant="standard"
        
          />

          <IconButton
            sx={{ width: "35px", height: "35px", bgcolor: "inhiret" }}
            color="primary"
            aria-label="search"
            
          >
            <SearchIcon />
          </IconButton>
        </Stack>
      </Box>

      <DataGrid
        sx={{ mt: 3 }}
        rows={row.map((item) => {
          return {
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone,
            createAt: item.created_at,
          };
        })}
        slots={{ toolbar: GridToolbar }}
        // @ts-ignore
        columns={columns}
        autoHeight
        hideFooter
      />

  
      

  
    </Box>
  );
};
export default Admin;
