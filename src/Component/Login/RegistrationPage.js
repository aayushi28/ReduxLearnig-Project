import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
import axios from "axios";
function RegistrationPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const state = { button: 1 };
  const isValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";

    if (firstName === null || firstName === "") {
      isproceed = false;
      errormessage += " Firstname";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (username === null || username === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    
    return isproceed;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (state.button === 2) {
      navigate("/login");
    }
    if (state.button === 1) {
      
      if (isValidate()) {
        axios.get('http://localhost:3001/user')
          .then(response => {
            const existingEmails = response.data.map(user => user.email);
            if (existingEmails.includes(email)){
              toast.warning('That email address is already taken. Try again!');
              return false;
            }else{
              axios.post('http://localhost:3001/user',{
                firstName,
                lastName,
                username,
                email,
                password,
                confirmPassword 
              })
            .then(response => {
              toast.success("Registered successfully.");
                  console.log(response.data);
                  navigate("/login");
            })
            }
          })
          .catch(error => {
            console.log(error);
          });
       
      }
    }
  };
  return (
    <div>
      <Card className="m-3">
        <Form onSubmit={handleSubmit}>
          <Card.Header>Create your account!!</Card.Header>
          <Row className="m-3">
            <Form.Label>
              First Name<span className="errmsg">*</span>{" "}
            </Form.Label>
            <Col>
              <Form.Control
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
              />
            </Col>
            <Form.Label>
              Last Name
            </Form.Label>
            <Col>
              <Form.Control
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
              />
            </Col>
            <Form.Label>
              Username<span className="errmsg">*</span>{" "}
            </Form.Label>
            <Col>
              <Form.Control
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
              />
            </Col>
            <Form.Label>
              Email<span className="errmsg">*</span>{" "}
            </Form.Label>
            <Col>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
            </Col>
            <Form.Label>
              Password<span className="errmsg">*</span>{" "}
            </Form.Label>
            <Col>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Col>
            <Form.Label>
              Confirm Password<span className="errmsg">*</span>{" "}
            </Form.Label>
            <Col>
              <Form.Control
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm Password"
              />
            </Col>
          </Row>
          <Col className="footer p-2">
            <Button
              type="submit"
              onClick={() => (state.button = 1)}
              variant='primary'
            >
              Register
            </Button>
            <Button
              type="submit"
              onClick={() => (state.button = 2)}
              variant='light'
            >
              Already User
            </Button>
          </Col>
          <ToastContainer />
        </Form>
      </Card>
    </div>
  );
}
export default RegistrationPage;
