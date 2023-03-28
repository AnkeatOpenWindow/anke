import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavbarBootstrap() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Movie Compare</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                 <Nav.Link href="/">Landing</Nav.Link>
                    <Nav.Link href="/compare">Compare</Nav.Link>
                    <Nav.Link href="/time">Timeline</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavbarBootstrap

  
