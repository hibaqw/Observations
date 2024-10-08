import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Root.css';
import Stack from 'react-bootstrap/Stack';
import ornament from '../docs/ornament.png'
import dancing_nymph from '../docs/dancing_nymph.png';
import StartButton from '../Components/StartButton';


function Root() {
  /* TODO: Flatten routes into one SPA app */
  return (
    <div class="App">
     <Stack gap={2}>
      <div class='mt-5'>
        <img src={ornament} alt="ornament decoration" style={{ width: '5em', height: '0.5em' }}/>
        <span className={'mx-3 montecarlo-regular display-6'} >Introducing</span>
        <img src={ornament} alt="ornament decoration" style={{ width: '5em', height: '0.5em' }} />
      </div>
      <div className='mt-5 mb-2 d-flex justify-content-center'>
      <p className={'mx-5 newsreader-medium display-6 d-flex align-items-center'}> est. </p>
      <div className='img-container'>
      <img className={'dancing-nymph'} src={dancing_nymph} alt="image of a dancing nymph" />
      </div>
      <p className={'mx-5 newsreader-medium display-6 d-flex align-items-center'}> 2024 </p>
      </div>
      <div className={'mt-5 d-flex flex-column align-items-center'}>
        <h1 className={'newsreader-medium display-1'}>Observations</h1>
        <span className={'mt-1 montecarlo-regular'} style={{ fontSize: '1.5em'}}>Extraordinary Worlds. Ordinary News.</span>
        <div className='mt-3'>
        <img src={ornament} alt="ornament decoration" style={{ width: '5em', height: '0.5em' }}/>
        <span className={'mx-3 newsreader-medium display-6'} >Society Paper</span>
        <img src={ornament} alt="ornament decoration" style={{ width: '5em', height: '0.5em' }} />
      </div>
      <StartButton/>
      </div>
    </Stack>
    </div>
  );
}

export default Root;
