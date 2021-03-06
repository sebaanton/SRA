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

import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import Cargar_plantilla from "views/Cargar_plantilla"
import routes from "routes.js";
import Crear_contacto from "views/Crear_contacto";
import Agendar_reunion from "views/Agendar_reunion";
//import Popup from "reactjs-popup";


class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">22</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav pullLeft>
        <NavItem eventKey={3} href="#">
            Administrador
          </NavItem>
        </Nav>
        <Nav pullRight>

           <NavItem eventKey={2} href="Crear_usuario">
           Crear Usuario
          </NavItem>
          <NavItem eventKey={3} href="http://localhost:3000/Login2">
            Cerrar Sesión
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
