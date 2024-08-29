import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SocietyPaper.css';
import '../styles/CustomForm.css';
import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SettingsForm from '../Components/SettingsForm';
import CharactersForm from '../Components/CharactersForm';
import EventsForm from '../Components/EventsForms';
import MysteriousHappeningsForm from '../Components/MysteriousHappeningsForm';
import SocietalNormsForm from '../Components/SocietalNormsForm';
import HeadlineForm from '../Components/HeadlineForm';

function SocietyPaper() {
  const [sectionNumber, setSectionNumber] = useState(1);

  const [sectionsInput, setSectionsInput] = useState({
    genre: '',
    setting:'',
    customSetting:'', 
    culture:'',
    characters:'', 
    conflicts:'', 
    relationships:'',
    events:'',
    scandals:'',
    phenomena:'',
    rumours:'',
    customs:'',
    status:'',
    headline:'',
    summary:''
  });

  const prevSection = () => {

    setSectionNumber( sectionNumber => sectionNumber - 1);
  }

  const nextSection = () => {

    setSectionNumber( sectionNumber => sectionNumber + 1);
  }

  const handleChange = (field, value) => {
    
    setSectionsInput(prevState => ({
      ...prevState, 
      [field]: value}))

  }

  const navigateSections = (step) => {
    switch(step) {
      case 1: 
      return <SettingsForm nextStep={nextSection} values={sectionsInput} handleChange={handleChange}/> 
      case 2: 
      return <CharactersForm prevStep={prevSection} nextStep={nextSection} values={sectionsInput} handleChange={handleChange}/> 
      case 3: 
      return <EventsForm prevStep={prevSection} nextStep={nextSection} values={sectionsInput} handleChange={handleChange}/> 
      case 4: 
      return <MysteriousHappeningsForm prevStep={prevSection} nextStep={nextSection} values={sectionsInput} handleChange={handleChange}/>
      case 5: 
      return <SocietalNormsForm prevStep={prevSection} nextStep={nextSection} values={sectionsInput} handleChange={handleChange}/> 
      case 6: 
      return <HeadlineForm prevStep={prevSection} values={sectionsInput} handleChange={handleChange}/> 
      default: return null //error screen

    }
  }

  return (
    <Container fluid className='society-paper'>  
    <Row> 
      <Col className='d-flex justify-content-center'>
      {navigateSections(sectionNumber)}
      </Col>
      <Col className='observations-screen'>
      Society Paper
    </Col>
    </Row>
   
    </Container>

  );
}

export default SocietyPaper;