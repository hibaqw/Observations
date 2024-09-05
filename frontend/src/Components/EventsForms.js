import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import {SECTIONS_TEXT} from '../constants';

function EventsForm(props) {
  const sectionName = SECTIONS_TEXT[2].sectionName;
  const sectionQuestions = SECTIONS_TEXT[2].sectionQuestions;
  const [errors, setErrors] = useState({});

  const checkErrors = () => {
    const errorObj = {}
    if ( props.values.events === ''){
      errorObj.events= "Please enter a brief description the event the sheet will cover."
    }
    if ( props.values.scandals === ''){
      errorObj.scandals= "Please enter a brief description of the scandal/or secret that the sheet will cover."
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
  
  return(
    <div className='m-3 w-75'>
    <h2>{sectionName}</h2>
    <Form>
    <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{sectionQuestions[0].question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    rows={3} 
    value={props.values.events} 
    onChange={ (event) => props.handleChange('events', event.target.value)}
    isInvalid ={!!errors.events}
    maxLength={200}
    />
    <Form.Control.Feedback type='invalid'>{ errors.events }</Form.Control.Feedback>
    </FormGroup>
    <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{sectionQuestions[1].question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    rows={3} 
    value={props.values.scandals} 
    onChange={ (event) => props.handleChange('scandals', event.target.value)}
    isInvalid ={!!errors.scandals}
    maxLength={200}
    />
    <Form.Control.Feedback type='invalid'>{errors.scandals}</Form.Control.Feedback>

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

export default EventsForm;