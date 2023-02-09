import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingBox(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <CircularProgress sx={{ color: 'rgba(255,255,255, .8)' }} />
      {props.children}
    </Box>
  );
}
