import { Button, Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div className='row'>
      <div className='col-2'>
        <Navbar bg='dark' variant='dark'>
          {/* <Container> */}
          <ul className='me-auto bg-dark'>
            <Navbar.Brand href='#home'>LoFive</Navbar.Brand>
            <Nav.Link href='#help'>Feed</Nav.Link>
            <Nav.Link href='#safety'>Friends</Nav.Link>
            <Nav.Link href='#pricing'>Discover</Nav.Link>
            <Nav.Link href='#feedback'>Listen</Nav.Link>
            <Nav.Link href='#terms'>Profile</Nav.Link>
            {/* </Nav> */}
          </ul>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
