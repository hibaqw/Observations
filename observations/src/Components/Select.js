import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/QuestionForm.css';
import { FormGroup } from 'react-bootstrap';

function Select(props) {
  return (
  <FormGroup>
  <Form.Label>{props.item.question}</Form.Label>
    <Form.Select className='selectInput my-3'>
    {props.item.answers.map((answer, key) => {
      return (
        <option>{answer}</option>
      )})}
    </Form.Select>
    </FormGroup>
  );
}

export default Select;