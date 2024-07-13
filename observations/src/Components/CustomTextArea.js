import React, { useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/QuestionForm.css';
import { FormGroup } from 'react-bootstrap';

import { TextAreaContext } from '../Providers/TextAreaProvider';


function CustomTextArea(props) {

  const { textAreas, handleChange } = useContext(TextAreaContext);
  return (
  <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{props.question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    name={props.textName} 
    rows={3} 
    value={textAreas[props.textName]} 
    onChange={(e) => handleChange(e, props.textName)}
    maxLength={200}/>
    </FormGroup>
  );
}

export default CustomTextArea;