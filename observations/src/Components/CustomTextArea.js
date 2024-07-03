import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/QuestionForm.css';
import { FormGroup } from 'react-bootstrap';

function CustomTextArea(props) {
  return (
  <FormGroup>
    <Form.Label>{props.question}</Form.Label>
    <Form.Control as="textarea"  className="textAreaInput" rows={3} />
    </FormGroup>
  );
}

export default CustomTextArea;