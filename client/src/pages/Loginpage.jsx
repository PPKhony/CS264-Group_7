import "./LoginPage.css";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function Loginpage() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/home";
  
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false);
    }
    if (form.checkValidity() === true) {
      handleLogin();
    }
    setValidated(true);
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleLogin = async () => {
    axios
      .post("http://localhost:8080/api/loginpage/login", formData)
      .then((res) => {
        if (res.status == 200) {
          setAuth(res.data);
          navigate(from, { replace: true });
        } else if (res.status == 409) {
          console.log("Login Failed");
        }
      })
      .catch((err) => {
        console.error("Error something", err);
      });
  };

  return (
    <>
      <Card className="LoginCard">
        <h1 className="mb-4">Login System</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-1" htmlFor="username">
              Username
            </Form.Label>
            <Form.Control
              type="username"
              placeholder="6xxxxxxxxx"
              id="username"
              onChange={handleChange}
              required
              pattern="^.{10}$"
            />
            <Form.Control.Feedback type="invalid">
              Student ID must have 10 digit
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-2" htmlFor="password">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Required Field
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="LoginButton my-3" type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default Loginpage;
