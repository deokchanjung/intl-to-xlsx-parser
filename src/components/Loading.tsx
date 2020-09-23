import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';
import Maybe from './Maybe';

export interface LoadingProps {
  show: boolean;
}

const styles = {
  dim: {
    width: '100vw',
    height: '100vh',
    position: 'absolute' as 'absolute',
    backgroundColor: 'rgba(0,0,0,0.1)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
  },
};

const Loading = ({ show }: LoadingProps): JSX.Element => {
  return (
    <Maybe test={show}>
      <Box style={styles.dim} alignItems='center' justifyContent='center'>
        <CircularProgress color='primary' size={80} />
      </Box>
    </Maybe>
  );
};

export default Loading;
