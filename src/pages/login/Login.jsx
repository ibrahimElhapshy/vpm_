import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";


import { useTheme } from "@mui/material";

import "../../index.css";


import axios from "axios";

const baseURL = "https://portal.profitsway.net/New_Parking/public/api";


const Login = () => {
  const theme = useTheme();




  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // })

    const url = `${baseURL}/auth/login`;
    const res = await axios.post(url, {
      user: data.get("email"),
      password: data.get("password"),
    });
    console.log(res.data.data);
    const token = res.data.data.token;
    const name = res.data.data.name;
  
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("name", name);

    

    window.location.replace("/");
  };



  




  return (
    <ThemeProvider theme={theme}>
    <Box className="bg">
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <Box
          className="box_login"
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding : "40px",
              height:"auto",
              borderRadius: "10px",
      
      
            }}
          >
          
            <Avatar
        sx={{
          transition: "0.25s",
          mx: "auto",
          width: 120 ,
          height: 88,
          borderRadius:"7px",
          my: 1,
        }}
        alt="profile"
        src="../../src/images/logo.png"
      />


            <Typography component="h1" variant="h5" color="#1576bd" >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1,
            
              }}
            >
              <TextField
              className="index_login"
                sx={{ textColor: "primary.main" ,}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"

                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 8, }}
              >
                Sign In
              </Button>
          
            </Box>
          </Box>
        </Container>
    </Box >
    </ThemeProvider>
  );
};
export default Login;


