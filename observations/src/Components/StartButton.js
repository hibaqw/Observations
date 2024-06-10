
import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/App.css'

const StartButton = ({ children, ...props }) => {
  return (
    <Button id={'start-button'} style={{color: '#344E41'}} {...props}>
      start 👀 now
    </Button>
  );
};

export default StartButton;
