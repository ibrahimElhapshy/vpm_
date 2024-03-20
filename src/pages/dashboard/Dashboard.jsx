import { Box, Button, Stack } from "@mui/material";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import Row1 from "./row1/Row1";
// import Row2 from "./row2/Row2";
// import Row3 from "./row3/Row3";
import Header from "../../components/Header";
import { useEffect,useState } from "react";
import Loader from "../loader/Loader";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  }, []);


  return (

  <>
      {loading && <Loader></Loader>}
      {!loading && (
      <div>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Header title={"Dashboard"} subTitle={"Welcome to your dashboard"} />
    
          <Box sx={{ textAlign: "right" }}>
            <Button
              sx={{ padding: "6px 8px", textTransform: "capitalize" }}
              variant="contained"
              color="primary"
            >
              <DownloadOutlinedIcon />
              Download Reports
            </Button>
          </Box>
        </Stack>
    
        <Row1 />
      </div>
      )}
  </>
  );
};

export default Dashboard;
