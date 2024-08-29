import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import { useEffect } from 'react';


import {SECTIONS_TEXT} from '../constants'

function SettingsForm(props) {
  const sectionName = SECTIONS_TEXT[0].sectionName;
  const sectionQuestions = SECTIONS_TEXT[0].sectionQuestions;

  const disabledStyle = {
    backgroundColor: '#A9A79E',
    color: '#87857E',
    cursor: 'not-allowed',
    border:'#A9A79E',
    borderRadius: '12px',
    padding: '0.75em',
  };

  const Continue = e => {
    e.preventDefault();
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
        <Form.Select className='selectInput my-3' value={props.values.genre} onChange={(event) => props.handleChange('genre',event.target.value)} >
        {sectionQuestions[0].answers.map((answer, key) => {
          return (
          <option value={String.fromCharCode(96 + (++key))}>{answer}</option>

      )})}
        </Form.Select>
    </FormGroup>
    <FormGroup className='mb-4'>
        <Form.Label className='mb-3'>{sectionQuestions[1].question}</Form.Label>
        <Form.Select className='selectInput my-3' value={props.values.setting} onChange={(event) => props.handleChange('setting',event.target.value)} >
        {sectionQuestions[1].answers.map((answer, key) => {
          return (
          <option value={String.fromCharCode(96 + (++key))}>{answer}</option>

      )})}
      </Form.Select>
    </FormGroup>
    <FormGroup className='mb-4'>
    <Form.Label className='mb-3'>{sectionQuestions[2].question}</Form.Label>
    <Form.Control as="textarea" 
    className="textAreaInput" 
    rows={3} 
    value={props.values.customSetting} 
    onChange={ (event) => props.handleChange('customSetting', event.target.value)}
    maxLength={200}
    />
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