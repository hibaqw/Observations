import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SocietyPaper.css';
import { useState} from 'react';
import Stack from 'react-bootstrap/Stack';
import { Container, Row, Col } from 'react-bootstrap';
import QuestionForm from '../Components/QuestionForm';


function SocietyPaper() {
  return (
    <Container fluid className='society-paper'> 
    <Row className='h-100'> 
      <Col>
      <QuestionForm/>
      </Col>
      <Col className='observations-screen'>
      Society Paper
    </Col>
    </Row>
   
    </Container>

  );
}

export default SocietyPaper;