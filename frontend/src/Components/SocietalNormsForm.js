import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import {SECTIONS_TEXT} from '../constants';

function SocietalNormsForm(props) {

  const sectionName = SECTIONS_TEXT[4].sectionName;
  const sectionQuestions = SECTIONS_TEXT[4].sectionQuestions;
  const [errors, setErrors] = useState({});

  const checkErrors = () => {
    const errorObj = {}
  
    if ( props.values.status === '' || props.values.status === 'a'){
      errorObj.status = "Please select one of the valid options."
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

  const Previous = e => {
    e.preventDefault();
    props.prevStep();
  }

  useEffect(() => {
    console.log(props.values);
  }, [props.values]);

  return (
    <div className='m-3 w-75'>
    <h2>{sectionName}</h2>
    <Form>
    <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{sectionQuestions[0].question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    rows={3} 
    value={props.values.customs} 
    onChange={ (event) => props.handleChange('customs', event.target.value)}
    maxLength={200}
    />
    </FormGroup>
    <FormGroup className='mb-4'>
        <Form.Label className='mb-3'>{sectionQuestions[1].question}</Form.Label>
        <Form.Select className='selectInput my-3' value={props.values.status} onChange={(event) => props.handleChange('status',event.target.value)} isInvalid ={!!errors.status}>
        {sectionQuestions[1].answers.map((answer, key) => {
          return (
          <option value={String.fromCharCode(96 + (++key))}>{answer}</option>

      )})}
        </Form.Select>
        <Form.Control.Feedback type='invalid'>{errors.status}</Form.Control.Feedback>
    </FormGroup>
    <div className='d-flex justify-content-center flex-column'> 
    <Button className='mt-2 mb-2' id={`continueBtn`} type='submit' onClick={Continue}>
      continue
    </Button>
    <Button id={`previousBtn`} onClick={Previous} >
      previous
    </Button>
    </div>
    </Form>
  </div>
  )
}

export default SocietalNormsForm;