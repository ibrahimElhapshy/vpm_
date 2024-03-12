import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

// import { rows } from "./data";
import Header from "../../components/Header";

import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";



import { styled, alpha, Stack,  } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";





const baseURL = "https://backend.profitsway.net/erp/public/api";
const TOKEN = localStorage.getItem("token");






export const Team = () => {
  const theme = useTheme();

  // field ==> reqird

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",

              bgcolor:
                access === "ADMIN"
                  ? theme.palette.primary.dark
                  : access === "ROOT"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "ADMIN" && (
              <AdminPanelSettingsOutlined
                sx={{
                  color: "#fff",
                }}
                fontSize="small"
              />
            )}
            {access === "ROOT" && (
              <SecurityOutlined
                sx={{
                  color: "#fff",
                }}
                fontSize="small"
              />
            )}
            {access === "USER" && (
              <LockOpenOutlined
                sx={{
                  color: "#fff",
                }}
                fontSize="small"
              />
            )}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },

    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row}) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
    
          setOpen(true);
        


        };

        const handleClose = () => {
          setOpen(false);
        };


    


        return (
          <Box>
            <Button
              variant="contained"
              color="success"
              sx={{
                p: "5px",
                maxWidth: "99px",
                borderRadius: "3px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
              }}
              onClick={handleClickOpen}
            >
              <BorderColorOutlinedIcon
                sx={{
                  color: "#fff",
                }}
                fontSize="small"
              />
              {/* <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                Edit
              </Typography> */}
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Edit User Details</DialogTitle>
              <DialogContent>
                <DialogContentText>This fileds reqirad</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name..."
                  type="text"
                  fullWidth
                  variant="outlined"
                  defaultValue = {row.name}
                  onChange={e => {
                    setName(e.target.value)
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="phone"
                  label="phone..."
                  type="text"
                  fullWidth
                  variant="outlined"
                  defaultValue = {row.phone}
                  onChange={e => {
                    setPhone(e.target.value)
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="password.."
                  type="password"
                  fullWidth
                  variant="outlined"
                  defaultValue = {row.password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="address"
                  label="Address.."
                  type="text"
                  fullWidth
                  variant="outlined"
                  defaultValue = "{row.address}"
                  // onChange={e => {
                  //   setAddress(e.target.value)
                  // }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                ///edit
                  onClick={() => {
                    editUser(row);
                    handleClose();
                  }}
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { id } }) => {
        return (
          <Box>
            <Button
              variant="contained"
              color="error"
              sx={{
                p: "5px",
                maxWidth: "99px",
                borderRadius: "3px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
                fontSize: "10px",
                fontColor: "#fff",
          
              }}
              ///delete
              onClick={() => {
                removeUser(id);
              }}
            >
              <DeleteOutlinedIcon
                sx={{
                  color: "#fff",
                }}
                fontSize="small"
              />
            
            </Button>
          </Box>
        );
      },
    },
  ];

  // let rows = [
  //   // {
  //   //   id: 1,
  //   //   name: "hosam",
  //   //   email: "hosam@gmail.com",
  //   //   age: 32,
  //   //   phone: "(002)121545888",
  //   //   access: "Admin",
  //   // },
  // ];


  
  // get USER
  const [row, setRow] = useState([]);
  
  // const userAccountType 
  useEffect(() => {
    getUsers();
    searchUser();
  }, []);

  const getUsers = async () => {
    const url = `${baseURL}/admin/users`;

    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + TOKEN,
      },
    });

    setRow(res.data.data);
    // console.log(res.data.data)
  };

  if (!row) return [];

  //delete user

  const removeUser = async (id) => {
    const url = `${baseURL}/admin/user/${id}`;
    // eslint-disable-next-line no-unused-vars
    const res = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + TOKEN,
      },
    });


    setRow(
      row.filter((row) => {
        return row.id !== id;
      })
    );
  };



  

  
  //edit user



  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Name, setName] = useState('')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Phone, setPhone] = useState('')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Password, setPassword] = useState('')
  // @ts-ignore
  // const [Address, Address] = useState('')

const newRow = {
  name: Name,
  phone: Phone,
  password: Password,
  // address: Address,

}


  




  const editUser = async (row) => {


// console.log(newRow)


    const url = `${baseURL}/admin/user/${row.id}`;
  
    // eslint-disable-next-line no-unused-vars
    const res = await axios.patch(url, newRow, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + TOKEN,
      },  
    }   );



    getUsers();
    // console.log(res.data.data);
  };




// search fun 

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));





// eslint-disable-next-line react-hooks/rules-of-hooks
const [PaginationModel, setPaginationModel] = useState({
  pageSize:25,
  page:0,
});







  const searchUser = async () => {
    

  


    const url = `${baseURL}/admin/users/search?per_page=10&user_account_type_id=e9d3dc19-a43a-4237-901c-57565d1f315b`;
    const res_search = await axios.get(url,{
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + TOKEN,
        
      },
    });


    // console.log(paginationModel)

    
console.log(res_search.data.data)
    


  }









  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"Team"} subTitle={"Managing the Team Members"} />

{/* search input */}
<Stack sx={{width: "40%",margin:"20px 0px"}}>
      <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
        
          />
        </Search>
    </Stack>





      <DataGrid
      
        rows={row.map((item) => {
          return {
          
            id: item.id,
            name: item.name,
            email: item.email,

            phone: item.phone,
            access: item.account_type === null  ?  ""  :  item.account_type.prefix,
          };
        })}
        // @ts-ignore
        columns={columns}

        paginationModel={PaginationModel}
        onPaginationModelChange={setPaginationModel}
      
        />
    </Box>
  );
};

export default Team;
