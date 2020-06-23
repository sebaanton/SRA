import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import bg from 'assets/images/bg.jpg';
import axios from "axios";

const apiUrl = 'http://localhost:8000';

axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

function Login2() {
  const history = useHistory();
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);
  const onSubmit = async () => {
    try {
      const { data } = await axios.post(`${apiUrl}/token/`, {email: email, password: password});
      localStorage.setItem('token', data.access);
      localStorage.setItem('refresh', data.refresh);
      setJwt(data.access);
      await getAdmin()
      await getCord()
      await getProf()
      history.push("notifications");
    } catch (e) {
      alert(e.message);
    }
  }
  async function getAdmin() {
    try {
      const response = await axios.get('http://localhost:8000/administrador/');
      var i
      for (i=0; i< response.data.length; i++) {
        if (response.data[i].email == email) {
          localStorage.setItem('userID', response.data[i].rut);
          localStorage.setItem('userType', 'administrador');
          console.log( localStorage.getItem('userID'));
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function getCord() {
    try {
      const response = await axios.get('http://localhost:8000/coordinador/');
      var i
      for (i=0; i< response.data.length; i++) {
        if (response.data[i].email == email) {
          localStorage.setItem('userID', response.data[i].rut);
          localStorage.setItem('userType', 'coordinador');
          console.log(localStorage.getItem('userID'))
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function getProf() {
    try {
      const response = await axios.get('http://localhost:8000/profesor/');
      var i
      for (i=0; i< response.data.length; i++) {
        if (response.data[i].email == email) {
          localStorage.setItem('userID', response.data[i].id);
          localStorage.setItem('userType', 'profesor');
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  const [email, setEmail] = useState({
    email: ''
  });

  const [password, setPassword] = useState({
    password: ''
  });

  function handleChangeE(event) {
    setEmail(event.target.value);
  }

  function handleChangeP(event) {
    setPassword(event.target.value);
  }

 return (
    <container>
      <form >
        <Row >
          <Col md={4} mdOffset={2}>
        <Card
          content={
            <div>
            <h3>Sign In</h3>

          <div className="form-group"  >
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={handleChangeE} defaultValue=""/>
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={handleChangeP} defaultValue=""/>
          </div>

          <div className="form-group">
              <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
          </div>

          <Button bsStyle="info" pullleft fill onClick={onSubmit}>
                submit
              </Button>
            <br />  
          <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
          </p>
          </div>
          }
        />
      </Col>   

      <Col md={4}>
            <div>
              <img src={bg} width="600" />

            </div>
      </Col>
          

          </Row>
      </form>
    </container>
  );
}
export default Login2