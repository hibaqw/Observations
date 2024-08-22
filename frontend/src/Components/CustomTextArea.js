import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/QuestionForm.css';
import { FormGroup } from 'react-bootstrap';

import { TextAreaContext } from '../Providers/TextAreaProvider';
import TextCounter from './TextCounter';


function CustomTextArea(props) {

  const { textAreas, handleChange } = useContext(TextAreaContext);

  const [counterText, setCounterText] = useState(200);

  const [textInput, setTextInput] = useState("");

  const handleOnChangeEvent = async e => {
    const value = e.target.value;
    setTextInput(value);
    setCounterText(200 - value.length );

  }

  useEffect(() => {
    console.log('Current Value:', textInput);
    handleChange(props.textName, textInput);
  }, [textInput])
  return (
  <div>
  <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{props.question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    name={props.textName} 
    rows={3} 
    value={textAreas[props.textName]} 
    onChange={handleOnChangeEvent}
    maxLength={200}/>
     <TextCounter charsLeft = {counterText}/>
    </FormGroup>
   
    </div>
  );
}

export default CustomTextArea;