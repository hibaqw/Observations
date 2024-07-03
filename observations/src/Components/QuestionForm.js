import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/QuestionForm.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Stack, Button} from 'react-bootstrap';
import Select from './Select';
import CustomTextArea from './CustomTextArea';


function QuestionForm() {
  // quizlet questions
  const sections = [
    { sectionName:'Settings & Context', sectionQuestions: [
     { question: 'What genre does you Society Paper belong to?*', isSelect: true, isRequired: true, answers: ['Fantasy 🐉', 'Scifi 🛸', 'Historial ⏳', 'Mystery/Psychological 🕵🏾', 'Young Adult 🏫'] },
     { question: <span className='monserrat-regular'>What is the primary setting the society sheet will cover?*</span>, isSelect: true, isRequired: true, answers: ['A royal court', 'Elon Musk’s Martian Colony', 'Regency-Era England', 'Your mysterious neighbour’s basement', 'A prestigious private academy', 'Other'] },
     { question: <span className='monserrat-regular'>If you answered other for the previous question, elaborate more on the primary setting the sheet will cover (optional) </span>, isSelect: false, isRequired: false},
     { question: <span className='monserrat-regular'>What culture(s) will your society be based on (optional)?</span>, isSelect: false, isRequired: false}

   ]},
   {sectionName: 'Characters & Relationships', sectionQuestions: [
     { question: <span className='monserrat-regular'>Who are the main characters involved in the gossip? Provide brief descriptions*</span>, isSelect: false, isRequired: true},
     { question: <span className='monserrat-regular'>Are there any notable families, groups, factions, rivalries, or conflicts in your society? Describe them briefly (optional)</span>, isSelect: false, isRequired: false},
     { question: <span className='monserrat-regular'>Are there any notable relationships or romantic entanglements in your society? (optional).</span>, isSelect: false, isRequired: false }
   ]},
   {sectionName:'Events & Scandals', sectionQuestions:[
     { question: <span className='monserrat-regular'>What recent event has everyone talking*? </span>, isSelect: false, isRequired: true },
     { question: <span className='monserrat-regular'>Is there a scandal or secret that has been recently uncovered? Provide details.*</span>, isSelect: false, isRequired: true },
   ]},
   {sectionName:'Mysterious Happenings', sectionQuestions:[
     { question: 'Are there any mysterious events or phenomena occurring in your society? Provide details (optional)', isSelect: false, isRequired: false},
     { question: <span className='monserrat-regular'>What rumors or superstitions are circulating among the people? Provide details (optional).</span>, isSelect: false, isRequired: false},
   ]},
   {sectionName: 'Societal Customs & Norms', sectionQuestions:[
     { question: <span className='monserrat-regular'>What are some unique customs or traditions in your society that might influence the gossip (optional)?</span>, isSelect: false, isRequired: false },
     { question: <span className='monserrat-regular'>How does your society view reputation?*</span>, isSelect: true, isRequired: true, answers: ['Status is everything; a single scandal can ruin a family', 'Reputation is less important than personal achievements', 'Status and reputation are balanced with personal honor']},
   ]},
   {sectionName: 'Headlines & Formatting', sectionQuestions:[
     { question: <span className='monserrat-regular'>What would be a catchy headline for a piece of gossip in your society paper?*</span>, isSelect: false, isRequired: true },
     { question: <span>Can you provide a brief summary or lead-in for an article based on the provided information (optional)</span>, isSelect: false, isRequired: false},
   ]},

  ]
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
        
      item.isSelect?  <Select item={item}/>
      : <CustomTextArea question={item.question}/> )})}
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