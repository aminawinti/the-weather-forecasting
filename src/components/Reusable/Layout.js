import { Grid } from '@mui/material';
import React from 'react';
import SectionHeader from './SectionHeader';

const Layout = ({ content, title, sx, mb, sectionSubHeader }) => {
  return (
    <Grid container sx={sx}>
      <Grid item xs={12}>
        <SectionHeader title={title} mb={mb || '0'} />
        {sectionSubHeader || null}
      </Grid>
      {content}
    </Grid>
  );
};

export default Layout;
