import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/QuestionForm.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Stack, Button} from 'react-bootstrap';
import Select from './Select';
import CustomTextArea from './CustomTextArea';
import { sections } from '../constants'


function QuestionForm() {
  // use state to manage user's progression through quizlet
  const [section, setSection] = useState(0);
  const isSettingsSectionComplete = section? true : false;

  /* function to handle continue buttton clicks
  and move user to the next section */
  const handleNext = (e) => {
    e.preventDefault();
    if (section >= 0 && section < 5)
      setSection(section + 1);
    return;
  };
   /* function to handle previous buttton clicks
  and move user to the previous section */
  const handlePrevious = (e) => {
    e.preventDefault();
    if (section > 0) 
      setSection(section - 1);
    return;
  };
  // styling for disabled previous button
  const disabledStyle = {
    backgroundColor: '#A9A79E',
    color: '#87857E',
    cursor: 'not-allowed',
    border:'#A9A79E',
    borderRadius: '12px',
    padding: '0.75em',
  };
// styling for active previous button
  const activeStyle = {
    backgroundColor: '#344E41',
    color: '#F5F5F5',
    cursor: 'pointer',
    borderRadius: '12px',
    border:'#344E41',
    padding: '0.75em',
  };

  return (
    <Stack gap={2}>

     <h4 className="p-2 monserrat-semi-bold mt-5">{sections[section].sectionName}</h4>
     <div className='d-flex align-items-center'>
     <Form className='w-75'>
     {sections[section].sectionQuestions.map((item, key) => {
      return (
      item.isSelect?  
      <Select id={sections[section].sectionName}item={item} selectKey={key}/>
      : <CustomTextArea question={item.question} key={key} textName={item.name}/> )})}
     <div className='d-flex flex-column'>
      {/* might have to make a separate button to handle generating the society paper */}
     <Button className='mt-2 mb-2' id={`continueBtn`} type='submit' onClick={(event) => {handleNext(event)}}>
      {section < 5?  'Continue': 'Generate'}
    </Button>
    <Button style={isSettingsSectionComplete? activeStyle : disabledStyle} onClick={(event) => {handlePrevious(event)}}>
      Previous
    </Button>
     </div>
     </Form>
     </div>
   </Stack>
  )}

export default QuestionForm;