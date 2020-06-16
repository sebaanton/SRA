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
import { Grid, Row, Col, Alert, Table } from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import { Tasks } from "components/Tasks/Tasks3.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Ver_detalle from "views/Ver_detalle";
class Notifications extends Component {
  render() {
    return (

      <div className="content">
              <div className="card">
              <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: "Juanito Perez"
                        }
                      ]}



                    />

                   <Button bsStyle="info" pullRight fill type="submit">
                      Buscar
                    </Button>   

                <h3>Atributos</h3>
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>

                    
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
        </div>
        <Grid fluid>

          <Row>
            <Col md={12}>
              <Card
                //title="Listado de alumnos"
                //ctTableFullWidth
                //ctTableResponsive
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
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                            <p ><a href="Ver_detalle">Ver Detalle</a>
                </p> 
                <p ><a href="Ver_registro">Ver Registro(s)</a>
                </p>
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
      </div>
    );
  }
}

export default Notifications;
