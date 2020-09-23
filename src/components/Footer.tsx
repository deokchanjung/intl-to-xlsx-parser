import { Typography } from '@material-ui/core';
import React from 'react';

const styles = {
  footer: {
    marginTop: '20px',
  },
};

const Footer = (): JSX.Element => {
  return (
    <footer style={styles.footer}>
      <Typography variant='body2' color='inherit' align='center'>
        © 2020. Deok Chan Jung. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
