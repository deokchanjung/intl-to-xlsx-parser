import { Box } from '@material-ui/core';
import React from 'react';
import { AttachForm } from './containers';

const App = (): JSX.Element => {
  return (
    <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center'>
      <AttachForm />
    </Box>
  );
};

export default App;
