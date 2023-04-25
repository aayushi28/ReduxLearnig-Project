import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TablePage from "../Component/Login/Table";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
function Welcome({username}) {
  const navigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      navigate("/login");
    }
  });
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#">Welcome, {username}</Navbar.Brand>
        </Container>
        <Container className="justify-content-end">
          <Link to={"/login"}>Logout</Link>
        </Container>
      </Navbar>
      <TablePage />
    </>
  );
}

export default Welcome;
