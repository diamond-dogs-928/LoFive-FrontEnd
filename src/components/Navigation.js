import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from './Button';
import Popup from 'reactjs-popup';

const Navigation = () => {
  const PopupExample = () => (
    <Popup trigger={<button>Trigger</button>} position='top left'>
      {(close) => (
        <div>
          Content here
          <a className='close' onClick={close}>
            &times;
          </a>
        </div>
      )}
    </Popup>
  );

  return (
    <div className='row'>
      <div className='col-2'>
        <Navbar bg='dark' variant='dark'>
          {/* <Container> */}
          <ul className='me-auto bg-dark'>
            {/* <Navbar.Brand href='#home'>LoFive</Navbar.Brand> */}
            <Button name={'Sign Up'} onClick={PopupExample} />
            <li>
              {' '}
              <Nav.Link href='#safety'>Friends</Nav.Link>
            </li>
            <li>
              <Nav.Link href='#pricing'>Discover</Nav.Link>
            </li>
            <li>
              <Nav.Link href='#feedback'>Listen</Nav.Link>
            </li>
            <li>
              <Nav.Link href='#terms'>Profile</Nav.Link>
            </li>
            {/* </Nav> */}
          </ul>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
