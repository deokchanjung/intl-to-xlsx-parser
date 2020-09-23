import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Dropzone, Footer, Loading } from '../components';
import Utils from '../utils';

const styles = {
  container: {
    textAlign: 'center' as 'center',
  },
};

const AttachForm = (): JSX.Element => {
  const [isShowLoading, toggleLoading] = useState(false);

  const onDropFile = (file: any): void => {
    let reader = new FileReader();
    reader.onload = Utils.readJSON;
    reader.readAsText(file[0], 'utf-8');
  };

  const onDownload = (): void => {
    // Test code
    // toggleLoading(true);
  };

  return (
    <div style={styles.container}>
      <Typography variant='h2'>JSON to XLSX Parser</Typography>
      <Typography variant='h6'>
        json 파일을 첨부하시면 xlsx 파일로 자동으로 변환됩니다. <br />
        변환이 완료되면 아래 다운로드 버튼을 통해 다운로드 하실 수 있습니다.
      </Typography>

      <Dropzone onDropFile={onDropFile} />

      <Button type='submit' color='primary' variant='contained' size='large' onClick={onDownload}>
        다운로드
      </Button>

      <Footer />

      <Loading show={isShowLoading} />
    </div>
  );
};

export default AttachForm;
