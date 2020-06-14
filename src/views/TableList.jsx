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
import { Grid, Row, Col, Table, Alert } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class TableList extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                //title="Listado de alumnos"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key} >
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}
                              </td>;
                            })}
                            <div>
                            <p pullLeft>
                  <a href="#">Ver detalle</a>
                    </p>
                    </div>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
=======
      
      <Grid fluid>
      <div className="card">
        <div className="header">
          <h4 className="title">{<i className="pe-7s-bell" />} Notificaciones</h4>
        </div>
        <div className="content">
          
          <Row>
            <Col md={6} mdOffset={3}>
              <h5>Notification states</h5>
              <Alert bsStyle="info">
                <button type="button" aria-hidden="true" className="close">
                  &#x2715;
                </button>
                <span>
                  <b> Info - </b> This is a regular notification made with
                  bsStyle="info"
                </span>
              </Alert>
              <Alert bsStyle="success">
                <button type="button" aria-hidden="true" className="close">
                  &#x2715;
                </button>
                <span>
                  <b> Success - </b> This is a regular notification made
                  with bsStyle="success"
                </span>
              </Alert>
              <Alert bsStyle="warning">
                <button type="button" aria-hidden="true" className="close">
                  &#x2715;
                </button>
                <span>
                  <b> Warning - </b> This is a regular notification made
                  with bsStyle="warning"
                </span>
              </Alert>
              <Alert bsStyle="danger">
                <button type="button" aria-hidden="true" className="close">
                  &#x2715;
                </button>
                <span>
                  <b> Danger - </b> This is a regular notification made with
                  bsStyle="danger"
                </span>
              </Alert>
            </Col>
          </Row>
          <br />
          <br />
          
        </div>
>>>>>>> 752817bd3f18e2e8367da21618bbb6c66e0ec917
      </div>
    </Grid>
    );
  }
}

export default TableList;
