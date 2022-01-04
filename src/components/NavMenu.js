import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'

function NavMenu() {
    return (

      // change expand to sm or similar so expands on larger screen, blank now for dev
      <Navbar bg="light" expand={''}>
      <Container fluid>
        <Navbar.Brand href=''>On the North Fork</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Title closeButton></Offcanvas.Title>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              
              <LinkContainer to='/specials'>
                <Nav.Link>Specials</Nav.Link>
              </LinkContainer>
              
              
              <LinkContainer to='/accommodations'>
                <Nav.Link>Accommodations</Nav.Link>
              </LinkContainer>
              
              
              <LinkContainer to='/weddings'>
                <Nav.Link>Weddings</Nav.Link>
              </LinkContainer>
              

              <LinkContainer to='/retreats'>
                <Nav.Link>Retreats</Nav.Link>
              </LinkContainer>
              

              <LinkContainer to='/maps'>
                <Nav.Link>Maps</Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Offcanvas.Body>
      </Navbar.Offcanvas>
      </Container>
    </Navbar>
    )
}

export default NavMenu