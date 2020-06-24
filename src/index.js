/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import axios from 'axios';
import { Promise } from "es6-promise";
import AdminLayout from "layouts/Admin.jsx";
//import AdminLayout from "layouts/Admin_profesor.jsx";
//import AdminLayout from "layouts/Admin_admin.jsx";
import Login2 from "views/Login2.jsx";

axios.interceptors.response.use( (response) => {
  // Return a successful response back to the calling service
  return response;
}, (error) => {
  // Return any error which is not due to authentication back to the calling service
  if (error.response.status !== 401) {
    return new Promise((resolve, reject) => {
      reject(error);
    });
  }

  // Try request again with new token
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:8000/token/refresh/', { refresh: localStorage.getItem('refresh') })
      .then(response => {
        localStorage.setItem('token', response.data.access);
        resolve(response.data.access);
      })
      .catch((error) => {
        reject(error);
      });
    })
  .then((token) => {
    // New request with new token
    const config = error.config;
    config.headers.authorization = `Bearer ${token}`;

    return new Promise((resolve, reject) => {
      axios.request(config).then(response => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    });

  })
  .catch((error) => {
    Promise.reject(error);
  });
});

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/AdminLayout" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
