import React from "react";
import { Box, MenuItem, Button, Snackbar, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";


const regEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const SignUp = () => {
  const {
    register,
    handleSubmit,

    // eslint-disable-next-line no-unused-vars
    watch,

    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
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
  };





  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          variant= "outlined"
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
        variant= "outlined"
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
        variant= "outlined"
      />
      <TextField label="Address 1" variant= "outlined" />
      <TextField label="Address 2" variant= "outlined" />

      <TextField
        id="standard-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant= "outlined"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
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
          autoHideDuration={6000}
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

export default SignUp;
