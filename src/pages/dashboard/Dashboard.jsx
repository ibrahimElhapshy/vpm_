import { Box,  Button, Stack} from "@mui/material";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import Row1 from "./row1/Row1";
import Row2 from "./row2/Row2";
import Row3 from "./row3/Row3";
import Header from '../../components/Header';



const Dashboard = () => {
  
  return (
    <div>

<Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
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
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
