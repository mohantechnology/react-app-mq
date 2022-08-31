import * as React from 'react';
// import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress > 95) {
            clearInterval(timer);
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 95);
      });
    }, 500);

    return () => { 
      clearInterval(timer);
    };
  }, []);

  return (
    // <Box sx={{ width: '100%' }}>
    <div style={{ zIndex: "100000", fontSize: "160px", position: "fixed", top: "0px" ,left:"0px", width: "100vw" }} > 
     <LinearProgress variant="determinate" value={progress} sx={{color:"black" , backgroundColor:"#f0f0f0"}} />
    </div>
     
    // </Box>
  );
}