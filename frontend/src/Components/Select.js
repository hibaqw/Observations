import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useContext } from 'react';
import { FormGroup } from 'react-bootstrap';
import { SelectContext } from '../Providers/SelectProvider';

function Select(props) {

  const { handleChange } = useContext(SelectContext);
  const [selectValue, setSelectValue] = useState('a');


  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectValue(value); 
  }

  useEffect(() => {
    console.log('Current Value:', selectValue);
    handleChange(selectValue, props.id, props.selectKey);
  }, [selectValue]);

  return (
  <FormGroup className='mb-4'>
  <Form.Label className='mb-3'>{props.item.question}</Form.Label>
    <Form.Select name={props.id} id={props.id} value={selectValue} className='selectInput my-3' onChange={(event) => handleSelectChange(event)} >
    {props.item.answers.map((answer, key) => {
      return (
        <option value={String.fromCharCode(96 + (++key))}>{answer}</option>

      )})}
    </Form.Select>
    </FormGroup>
  );
}

export default Select;