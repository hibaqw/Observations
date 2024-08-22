import Button from 'react-bootstrap/Button';
import '../styles/QuestionForm.css'
const ContinueButton = (props) => {
  return (
    <Button className='mt-2 mb-2' id={`continueBtn`} type='submit'>
      {props.sectionStep < 6? <span> Continue </span>: <span> Generate </span>}
    </Button>
  );
};

export default ContinueButton;