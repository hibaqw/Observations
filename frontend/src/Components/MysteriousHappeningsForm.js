import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import { useEffect } from 'react';

import {SECTIONS_TEXT} from '../constants';

function MysteriousHappeningsForm(props) {
  const sectionName = SECTIONS_TEXT[3].sectionName;
  const sectionQuestions = SECTIONS_TEXT[3].sectionQuestions;

  const Continue = e => {
    e.preventDefault();
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
    value={props.values.phenomena} 
    onChange={ (event) => props.handleChange('phenomena', event.target.value)}
    maxLength={200}
    />
    </FormGroup>
    <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{sectionQuestions[1].question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    rows={3} 
    value={props.values.rumours} 
    onChange={ (event) => props.handleChange('rumours', event.target.value)}
    maxLength={200}
    />
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

export default MysteriousHappeningsForm;