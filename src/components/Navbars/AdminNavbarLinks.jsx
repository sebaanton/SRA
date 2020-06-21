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
        <Nav>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>

          <NavDropdown
            eventKey={1}
            title="Crear"
            id="basic-nav-dropdown-right">
            <MenuItem eventKey={1.1}>Contacto</MenuItem>
            <MenuItem eventKey={1.2}>Reunión</MenuItem>
           </NavDropdown>

          <NavDropdown
            eventKey={2}
            title="Ingresar Datos"
            id="basic-nav-dropdown-right">
            <MenuItem eventKey={2.1}>Digitación</MenuItem>
            
            <MenuItem eventKey={2.2} href="Cargar_plantilla">Cargar Plantilla</MenuItem>
           </NavDropdown>
          <NavItem eventKey={3} href="#">
            Cerrar Sesión
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
