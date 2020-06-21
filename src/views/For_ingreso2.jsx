import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class For_ingreso2 extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Ingreso del alumno por autoconsulta"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-3"]}
                      properties={[
                        {
                          label: "Nombre",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Juan",                         
                        },
                        {
                          label: "Apellido",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Perez", 
                        },
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "123456789-8",
                          //defaultValue: "123456789",
                        },
                        
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-3", "col-md-4", "col-md-4"]}
                      properties={[
                        
                        {
                          label: "Calificación Estimada",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "3.1",
                        },
                        {
                          label: "Porcentaje de Asistencia",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "10%",
                        },
                        {
                          label: "Interés Percibido",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Alto-Medio-Bajo",
                        },
                        
                      ]}
                    />
                  <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control"
                            rows="5" cols='80'  /> 
                            
                      </label>   
                    </form>
                    <br />
                    <br />

                    <Button bsStyle="info" pullRight fill type="submit">
                      Ingresar Datos
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default For_ingreso2;
  