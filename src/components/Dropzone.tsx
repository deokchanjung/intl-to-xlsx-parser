import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export interface DropzoneProps {
  onDropFile: (file: any) => void;
}

const styles = {
  dropbox: {
    width: '250px',
    height: '250px',
    margin: '30px auto',
    padding: '10px',
    boxSizing: 'border-box' as 'border-box',
    border: '5px dotted black',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center' as 'center',
    justifyContents: 'center' as 'center',
    lineHeight: '1.6',
    outline: 'none',
    cursor: 'pointer',
  },
  hover: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
};

const Dropzone = ({ onDropFile }: DropzoneProps): JSX.Element => {
  const [isHover, toggleHover] = useState(false);

  const onDrop = useCallback((file) => {
    // Do something with the files
    onDropFile(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{ ...styles.dropbox, ...(isHover ? styles.hover : {}) }}
      onMouseOver={(): void => toggleHover(true)}
      onMouseOut={(): void => toggleHover(false)}
    >
      <input {...getInputProps()} accept='application/json' />
      {isDragActive ? (
        <p>마우스에서 손을 떼주세요...</p>
      ) : (
        <p>파일을 이곳에 드래그하시거나, 이곳을 클릭해주세요.</p>
      )}
    </div>
  );
};

export default Dropzone;
