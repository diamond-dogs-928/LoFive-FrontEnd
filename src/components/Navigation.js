import { Button, Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>LoFive</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#help'>Feed</Nav.Link>
            <Nav.Link href='#safety'>Friends</Nav.Link>
            <Nav.Link href='#pricing'>Discover</Nav.Link>
            <Nav.Link href='#feedback'>Listen</Nav.Link>
            <Nav.Link href='#terms'>Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
