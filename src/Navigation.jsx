import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  const Sample = () => {
 navigate('/sample')
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             
              <Link to={"/home"}>
                <Nav.Link href="/home">Home</Nav.Link>
              </Link>

              <Link to={"/sample"}>
                <Nav.Link href="/sample">API</Nav.Link>{" "}
              </Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Link to="/hi"><Button>click here</Button></Link>

   <Link to="/hi"><button>click me</button></Link>

   <Link to="/hi">change</Link> */}

      <Button onClick={Sample}>Click</Button>

      <Link to="/sample">
        {" "}
        <Button>CLICK</Button>
      </Link>

      <Link to="/home">hiiii</Link>
    </div>
  );
}

export default Navigation;
