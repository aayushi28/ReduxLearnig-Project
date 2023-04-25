import { Nav } from "react-bootstrap";
function SubNavbar(){
    return (
      <>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link  href='/media'>Media</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Flights</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">
              Cars
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">
              Things to do
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">
              Packages
            </Nav.Link>
          </Nav.Item>
        </Nav>
        </>
      );
}

export default SubNavbar;