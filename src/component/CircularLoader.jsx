import * as React from 'react'; 
import CircularProgress from '@mui/material/CircularProgress';
 

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

   
  return (
 
    <div style={{ zIndex: "100000" , textAlign:'center', width:"100%", padding:20 }} > 
    <CircularProgress    />
    </div>
     
    // </Box>
  );
}