import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const WeatherIconDetail = ({ src, alt }) => {
  return (
    <Box
      component="img"
      sx={{
        width: { xs: '50px', sm: '60px', md: '70px' },
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        padding: 0,
      }}
      alt={alt || 'Weather icon'}
      src={src || 'https://via.placeholder.com/60'}
      loading="lazy"
    />
  );
};

WeatherIconDetail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

WeatherIconDetail.defaultProps = {
  alt: 'Weather condition',
};

export default WeatherIconDetail;
