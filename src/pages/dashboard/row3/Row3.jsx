import { Stack, Paper, Typography, useTheme } from "@mui/material";
import Pie from '../../pieChart/Pie';
import Bar from '../../barChart/Bar';
import GEO from './../../geography/GEO';

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} mt={3} gap={2}>
      <Paper sx={{minWidth: '400px', flexGrow: 1, width : "25%" }}>
    <Typography 
      color={theme.palette.secondary.main}
      sx={{padding: " 30px 30px 0 30px", fontWeight: 600}}
      variant="h6"

    >
      Campaign
    </Typography>
    <Pie isDashboard= {true} />

    <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>

      </Paper>

      <Paper sx={{minWidth: '400px', flexGrow: 1, width : "32%" }}>
          <Typography 
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 600,
            padding: "30px 30px 0 30px",


          }}
          >
            Sales Quantity
          </Typography>

          <Bar isDashboard={true} />

      </Paper>

      <Paper sx={{minWidth: '400px', flexGrow: 1, width : "33%" }}>

<GEO isDashboard={true} />
         
      </Paper>
    </Stack>
  );
};

export default Row3;
