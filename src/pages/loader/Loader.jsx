import { Box } from '@mui/material';
import { Audio,ThreeCircles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Box className="loading" sx={{
    justifyContent:"center",
        textAlign: "center",
        marginTop: "200px",
        marginLeft: "40%",
    
    }}>
      <ThreeCircles
  height="100"
  width="100"
  color="#42a5f5"
  ariaLabel="Loading"

/>
    </Box>
  );
}

export default Loader;
