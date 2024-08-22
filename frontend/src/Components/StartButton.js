
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Root.css'

const StartButton = ({ children, ...props }) => {
  let navigate = useNavigate();
  
  function handleClick(){
    navigate('/society-paper');
  }
  return (
    <Button id={'start-button'} style={{color: '#344E41'}} onClick={handleClick}>
      start 👀 now
    </Button>
  );
};

export default StartButton;
