import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import { useEffect } from 'react';


import {SECTIONS_TEXT} from '../constants'

function SettingsForm(props) {
  const sectionName = SECTIONS_TEXT[0].sectionName;
  const sectionQuestions = SECTIONS_TEXT[0].sectionQuestions;
  const [errors, setErrors] = useState({});

  const disabledStyle = {
    backgroundColor: '#A9A79E',
    color: '#87857E',
    cursor: 'not-allowed',
    border:'#A9A79E',
    borderRadius: '12px',
    padding: '0.75em',
  };

  const checkErrors = () => {
    const errorObj = {}
  
    if ( props.values.genre === '' || props.values.genre === 'a'){
      errorObj.genre = "Please select one of the valid options."
    }
    if (props.values.setting === '' || props.values.setting === 'a'){
      errorObj.setting = "Please select one of the valid options."
    }
    if (props.values.setting === 'g' && props.values.customSetting === ''  ){
      errorObj.customSetting = "Please enter a valid response for the setting of the society sheet."
    }
    return errorObj;
     
  } 

  const Continue = e => {
    e.preventDefault();
    const newErrors = checkErrors();
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors);
      console.log(newErrors);
      return;
    }
    props.nextStep();

  }

  useEffect(() => {
    console.log(props.values);
  }, [props.values]);
  
  return(
    <div className='m-3 w-75'>
    <h2>{sectionName}</h2>
    <Form>
      <FormGroup className='mb-4'>
        <Form.Label className='mb-3'>{sectionQuestions[0].question}</Form.Label>
        <Form.Select className='selectInput my-3' value={props.values.genre} onChange={(event) => props.handleChange('genre',event.target.value)} isInvalid ={!!errors.genre} >
        {sectionQuestions[0].answers.map((answer, key) => {
          return (
          <option value={String.fromCharCode(96 + (++key))}>{answer}</option>

      )})}
        </Form.Select>
        <Form.Control.Feedback type='invalid'>{ errors.genre }</Form.Control.Feedback>
    </FormGroup>
    <FormGroup className='mb-4'>
        <Form.Label className='mb-3'>{sectionQuestions[1].question}</Form.Label>
        <Form.Select className='selectInput my-3' value={props.values.setting} onChange={(event) => props.handleChange('setting',event.target.value)} isInvalid ={!!errors.setting} >
        {sectionQuestions[1].answers.map((answer, key) => {
          return (
          <option value={String.fromCharCode(96 + (++key))}>{answer}</option>

      )})}
      </Form.Select>
      <Form.Control.Feedback type='invalid'>{ errors.setting }</Form.Control.Feedback>
    </FormGroup>
    <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{sectionQuestions[2].question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    rows={3} 
    value={props.values.customSetting} 
    onChange={ (event) => props.handleChange('customSetting', event.target.value)}
    maxLength={200}
    isInvalid ={!!errors.customSetting}
    />
    <Form.Control.Feedback type='invalid'>{ errors.customSetting }</Form.Control.Feedback>
    </FormGroup>
    <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{sectionQuestions[3].question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    rows={3} 
    value={props.values.culture} 
    onChange={ (event) => props.handleChange('culture', event.target.value)}
    maxLength={200}
    />
    </FormGroup>
    <div className='d-flex justify-content-center flex-column'> 
    <Button className='mt-2 mb-2' id={`continueBtn`} type='submit' onClick={Continue}>
      continue
    </Button>
    <Button style={disabledStyle} >
      previous
    </Button>
    </div>
    </Form>
  </div>

  );
}

export default SettingsForm;