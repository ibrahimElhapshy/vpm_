import React, { useEffect, useState } from "react";
// import {useState} from "react";
import { Box, MenuItem, Button, Snackbar, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";


const regEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // eslint-disable-next-line no-useless-escape
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


  import axios from "axios";
  const baseURL = "https://backend.profitsway.net/erp/public/api";
  const TOKEN = localStorage.getItem("token");




// data : [
//   // {
//   //   value: "Admin",
//   //   label: "Admin",
//   //   id:"e9d3dc19-a43a-4237-901c-57565d1f315b"
//   // },
//   // {
//   //   value: "Root",
//   //   label: "Root",
//   //   id:"3d1d6fa6-bc86-40c5-a0a8-56b4fd382ff3"
//   // },

// ];




const Form = () => {
  const {
    register,
    handleSubmit,

    watch,
    
    formState: { errors },
  
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const [OptionId, setOptionId] = React.useState("");

  

  const handleClose = ( reason) => {
  
      console.log(OptionId)


    if (reason === "clickaway") {

      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {

    handleClick();
  // sellectedRole()
    handleSubmitUser();
  };



  //get sellected role item id




  


  // const data = [
  //   {
  //     value: "Admin",
  //     label: "Admin",
  //     id:"e9d3dc19-a43a-4237-901c-57565d1f315b"
  //   },
  //   {
  //     value: "Root",
  //     label: "Root",
  //     id:"3d1d6fa6-bc86-40c5-a0a8-56b4fd382ff3"
  //   },
  
  // ];


  const [data, setData] = useState([]);


  useEffect(() => {
    sellectedRole();
    
  }, []);
  const sellectedRole = async () => {
    



    const url = `${baseURL}/system-lookups/1`;
    const res_role = await axios.get(url,{
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + TOKEN,
      },
    });



setData(res_role.data.data)
    
console.log(res_role.data.data)

  }






  const user = {
    name : watch("name"),
    email : watch("email"),
    phone : watch("contactNumber"),
    password : watch("password"),
    address : watch("address"),
    user_account_type_id: OptionId
  }


const handleSubmitUser = async () => {
// console.log("e9d3dc19-a43a-4237-901c-57565d1f315b")

    const url = `${baseURL}/admin/user`;
    const res = await axios.post(url,user,{
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + TOKEN,
      },
    });

    console.log(res.data.data);
    

    
  };











  return (
    <Box
      onSubmit={
  
      
      handleSubmit(onSubmit)  
      
  
        
      }
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
      noValidate
      autoComplete="off"
    >
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <TextField
          error={Boolean(errors.name)}
          helperText={
            errors.name ? "This Filed Is Required & min 3 charater." : null
          }
          {...register("name", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Name"
          variant="outlined"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "Please provide a valid email address." : null
        }
        {...register("email", {
          required: true,
          pattern: regEmail,
        })}
        label="Email"
        variant="outlined"
      />
      <TextField
        error={Boolean(errors.contactNumber)}
        helperText={
          errors.contactNumber ? "Please provide a valid Phone Number." : null
        }
        {...register("contactNumber", {
          required: true,
          pattern: phoneRegExp,
        })}
        label="Contact Number"
        variant="outlined"
      />
      <TextField
        error={Boolean(errors.password)}
        helperText={
          errors.password ? "Please provide a valid new password." : null
        }
        {...register("password", {
          required: true,
          pattern: strongRegex,
        })}
        label="Password"
        variant="outlined"
      />
  
      <TextField
      error={Boolean(errors.address)}
      helperText={
        errors.address ? "Please provide user address address." : null
      }
      {...register("address", { required: true, minLength: 10 })}
      label="Address" 
      variant="outlined" />

      <TextField
        id="standard-select-type"
        select
        label="Role"
        defaultValue=""
        variant="outlined"
        onChange={(e) => {
          setOptionId(e.target.value)
          handleClose()
        }}
      >
        {data.map((option) => (
          <MenuItem 
          id={option.id} key={option.key} value={option.id}
        
          >
            {option.name} 
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" , mt:5}}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize," }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account created successfully.
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
