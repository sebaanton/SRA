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
import axios from "axios";

console.log(axios)

class Notifications extends Component {
  state = {
    alumno:[]
  };

componentDidMount(){
    axios.get("http://localhost:8000/alumno/").then(res2 => {
      this.setState({
        alumno: res2.data
      });
      console.log(res2.data);
    });
    }
  
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
                      {this.state.alumno.map((prop, key) => {
                        return (
                          
                          <tr>
                            <td key={key}>{prop.rut}</td>
                            <td key={key}>{prop.nombre}</td>
                            <td key={key}>{prop.correo}</td>
                            <td key={key}>{prop.estado_actual}</td>
                            <td>
                              <p><a href={`Ver_detalle/${prop.rut}`}>Ver Detalle</a></p>
                              <p><a href="Ver_registro">Ver Registro(s)</a></p>
                            </td>
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
