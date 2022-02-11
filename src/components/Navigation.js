<<<<<<< HEAD
// import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import '../CSS/navigation.css';


=======
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from './Button';
import Popup from 'reactjs-popup';
>>>>>>> 7cba859 (trying to fix my messed up commits)

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
<<<<<<< HEAD
    
  <div className="liAndBar">
        <div id="navBar">
          {/* ROUTES NEED TO BE PUT IN HERE INSTEAD OF THE TEXT */}
          <ul className='NavBarUl'>
            <li> ROUTE TO Home</li>
            <li> ROUTE TO Friends</li>
            <li> ROUTE TO Home</li>
            <li> ROUTE TO Messages</li>
            <li> ROUTE TO Lists</li>
            <li> ROUTE TO Profile</li>
=======
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
>>>>>>> 7cba859 (trying to fix my messed up commits)
          </ul>
    </div>
    <div id='sideBar'></div>
  </div>
    
  );
};

export default Navigation;
