import React from 'react'
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';

import {SECTIONS_TEXT} from '../constants';


function CharactersForm(props) {

  const sectionName = SECTIONS_TEXT[1].sectionName;
  const sectionQuestions = SECTIONS_TEXT[1].sectionQuestions;
  const [errors, setErrors] = useState({});


  const checkErrors = () => {
    const errorObj = {}
    if ( props.values.characters === ''){
      errorObj.characters = "Please enter a brief description of the characters that will be covered in the sheet."
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
    value={props.values.characters} 
    onChange={ (event) => props.handleChange('characters', event.target.value)}
    maxLength={200}
    isInvalid ={!!errors.characters}/>
    <Form.Control.Feedback type='invalid'>{ errors.characters }</Form.Control.Feedback>
    </FormGroup>
    <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{sectionQuestions[1].question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    rows={3} 
    value={props.values.conflicts} 
    onChange={ (event) => props.handleChange('conflicts', event.target.value)}
    maxLength={200}
    />
    </FormGroup>
    <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{sectionQuestions[2].question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    rows={3} 
    value={props.values.relationships} 
    onChange={ (event) => props.handleChange('relationships', event.target.value)}
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

export default CharactersForm;