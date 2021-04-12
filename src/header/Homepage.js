import {
  Button,
  FormControl,
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import './Homepage.css';
import backvid from './back.mp4';
const Homepage = () => {
  return (
    <div>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="https://i.ibb.co/S3Fyccr/logo.png"
          width="70"
          height="30"
          className="d-inline-block align-top"
        />
        <span class="colortext">&nbsp;Car Lovers</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">

          </Nav.Link>
          <Nav.Link href="#link"><span class="colortext2">Link</span></Nav.Link>
          <NavDropdown title="Dropdown" id="navb">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <span>&nbsp;</span>
        <FormControl type="text" placeholder="Search" class="mr-sm-2" id="formc" />
        <span>&nbsp;</span>
        <Button variant="dark">
          <img
            src="https://i.ibb.co/4dw3vHR/search.png"
            width="30"
            height="30"
          />
        </Button>
        <span>&nbsp;</span>

      </Navbar.Collapse>
      <Button variant="dark" id="btn1" href="/login">Log in</Button>
      <span>&nbsp;</span>
      <Button variant="dark" id="btn2">Register</Button>
    </Navbar>
      
    </div>
  );
}

export default Homepage;
