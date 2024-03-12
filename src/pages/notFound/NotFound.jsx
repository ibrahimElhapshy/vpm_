
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main}>
        There is no design yet
        <br />
        <br />Please try again later ...
      </Typography>
    </Box>
  );
}

export default NotFound;
