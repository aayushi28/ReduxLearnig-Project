import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
import axios from "axios";
import {GoogleLogin} from "react-google-login"; 
import {gapi} from 'gapi-script';
const clientId = '34708467709-9ogiga3t1l1sl1tif92ndil5lepndphm.apps.googleusercontent.com';
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const state = { button: 1 };
  useEffect(() => {
    sessionStorage.clear();
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (state.button === 1) {
      if (validate()) {
        axios.get('http://localhost:3001/user')
      .then(response => {
        const userData = response.data;
        const user = userData.find(user => user.username === username && user.password === password);
        //const userAdmin = userData.find(user => user.username === 'ayushi' && user.password === 'aa');
        if (user) {
          if((user.username === 'ayushi')){
            sessionStorage.setItem("username", username);
            navigate('/admin');
          } else{
            toast.success("success");
            sessionStorage.setItem("username", username);
            navigate('/home', {username: user.username});
          }
          
        }else {
          toast.error("Please enter valid credential!");
        }
        
      })
      .catch(error => {
        console.log(error);
      });
       
      }
    }
    if (state.button === 2) {
      navigate("/");
    }
  };
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  const onSuccess = (response) => {
    console.log("Login Success! current user:", response.profileObj);
  }
  const onFailure = (response) => {
    console.log('Login Failed! response: ', response);
  }
  return (
    <Card className="m-5" style={{ width: "50rem" }}>
      <Card.Header>Please Log In!!</Card.Header>
      <Form onSubmit={handleSubmit}>
        <Row className="m-3">
          <Form.Label>Username</Form.Label>
          <Col>
            <Form.Control
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Col>

          <Form.Label>Password</Form.Label>
          <Col>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Col>
        </Row>

        <Col className="footer p-3">
          <Button
            type="submit"
            onClick={() => (state.button = 1)}
            variant='primary'
            className="ml-5"
          >
            Log In{" "}
          </Button>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn
          />
          <Button
            type="submit"
            onClick={() => (state.button = 2)}
            variant='light'
          >
            Add User
          </Button>
          
        </Col>
        <ToastContainer />
      </Form>
    </Card>
  );
}
