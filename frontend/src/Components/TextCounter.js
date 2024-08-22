
import '../styles/QuestionForm.css'

function TextCounter(props) {


  const warningStyle = {
    color: "#E0593B"
  };

  const defaultStyle = {
    color: "#939189"
  }

  return (
    <>
    <p className="mt-1" style={props.charsLeft <= 50 ? warningStyle: defaultStyle}>
      {props.charsLeft}
    </p>
    </>
  );
};

export default TextCounter;