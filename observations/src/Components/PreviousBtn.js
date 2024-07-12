import Button from 'react-bootstrap/Button';
import '../styles/QuestionForm.css'
const PreviousButton = ({ children, ...props }) => {
  return (
    <Button id={`previousBtn`}>
      Previous
    </Button>
  );
};

export default PreviousButton;