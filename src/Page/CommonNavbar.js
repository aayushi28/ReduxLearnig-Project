import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function CommonNavbar(){
    const navigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
          navigate("/login");
        }
      });
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Welcome</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              
              <NavDropdown title="Account" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Rate the app
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  My account info
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Delete my account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Link to={"/login"}>Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default CommonNavbar;