import { Box } from '@mui/material';
import { ThreeCircles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Box className="loading" sx={{
    justifyContent:"center",
    alignItems:"center",
        textAlign: "center",
        marginTop: "150px",
        marginLeft: "45%",
    
    }}>
      <ThreeCircles
  height="200"
  width="200"
  color="#42a5f5"
  ariaLabel="Loading"

/>
    </Box>
  );
}

export default Loader;
