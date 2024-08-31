import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

function CustomNavBar() {
  return (
    <Navbar expand="lg" className="d-flex justify-content-between mx-2" id="custom-nav">
      <Navbar.Brand href="#">Results</Navbar.Brand>
      <Button className='share-btn'>
        <Icon.Share className="share-icon" size={15}/>
        share
      </Button>
    </Navbar>
  );
}

export default CustomNavBar;